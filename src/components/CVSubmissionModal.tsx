import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, Upload, AlertCircle } from "lucide-react";
import { safeNameSchema, safeEmailSchema, safePhoneSchema, isSubmissionTooFast, validateUploadedFile } from "@/lib/formSecurity";
import { sendEmail } from "@/lib/emailService";

const formSchema = z.object({
  name: safeNameSchema,
  email: safeEmailSchema,
  phone: safePhoneSchema,
  honeypot: z.string().max(0),
});

interface CVSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export const CVSubmissionModal = ({ isOpen, onClose, jobTitle }: CVSubmissionModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [sanitizedFileName, setSanitizedFileName] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", honeypot: "" },
  });

  const handleFileChange = async (file: File | undefined) => {
    if (!file) {
      setCvFile(null);
      setFileError(null);
      setSanitizedFileName(null);
      return;
    }
    const result = await validateUploadedFile(file);
    if (result.ok === false) {
      setFileError(result.error);
      setCvFile(null);
      setSanitizedFileName(null);
    } else {
      setFileError(null);
      setCvFile(file);
      setSanitizedFileName(result.sanitizedName);
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (data.honeypot) return;

    if (isSubmissionTooFast()) {
      toast({ title: "Something went wrong", description: "Please wait a moment and try again.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const message = `Name: ${data.name}\nPhone: ${data.phone}\n\nPosition: ${jobTitle || "General Application"}`;
      await sendEmail({
        email: data.email,
        name: data.name,
        message,
        type: 'careers',
        file: cvFile || undefined,
      });
      toast({ title: "CV Submitted!", description: "We've received your application. We'll review it and be in touch soon." });
      form.reset();
      setCvFile(null);
      setSanitizedFileName(null);
      setFileError(null);
      onClose();
    } catch (error) {
      const err = error as any;
      if (err.status === 429) {
        toast({
          title: "Please try again later",
          description: "We're experiencing high volume. Please wait a few minutes and try again.",
          variant: "destructive"
        });
      } else {
        toast({ title: "Error", description: "Failed to submit CV. Please try again.", variant: "destructive" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Submit Your CV</DialogTitle>
          <DialogDescription>
            {jobTitle ? `Apply for ${jobTitle}` : "Submit your CV for a position"}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="hidden" aria-hidden="true">
              <Input {...form.register("honeypot")} tabIndex={-1} autoComplete="off" />
            </div>

            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+44 7000 000000" {...field} /></FormControl><FormMessage /></FormItem>
            )} />

            {/* CV Upload */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Upload CV</label>
              <div
                className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => document.getElementById("cv-upload")?.click()}
              >
                <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  {sanitizedFileName ?? "Upload your CV (PDF, DOC, DOCX — max 5 MB)"}
                </p>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => handleFileChange(e.target.files?.[0])}
                />
              </div>
              {fileError && (
                <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                  <AlertCircle size={14} /> {fileError}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full gap-2" disabled={isSubmitting || !!fileError}>
              <Send size={18} /> {isSubmitting ? "Submitting..." : "Submit CV"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
