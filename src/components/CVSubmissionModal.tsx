import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { safeNameSchema, safeEmailSchema, safePhoneSchema, isSubmissionTooFast, isDuplicateSubmission } from "@/lib/formSecurity";
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
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", honeypot: "" },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (data.honeypot) return;

    if (isSubmissionTooFast()) {
      toast({ title: "Something went wrong", description: "Please wait a moment and try again.", variant: "destructive" });
      return;
    }

    const { honeypot: _hp, ...payload } = data;
    if (await isDuplicateSubmission(payload)) {
      toast({ title: "Duplicate submission", description: "This CV has already been submitted.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const message = `Name: ${data.name}\nPhone: ${data.phone}\n\nPosition: ${jobTitle || "General Application"}\n\nNote: Please attach your CV to the email.`;
      await sendEmail({
        email: data.email,
        name: data.name,
        message,
        type: 'careers',
      });
      toast({ title: "CV Submitted!", description: "We've received your application. Please reply to the confirmation email with your CV attached." });
      form.reset();
      onClose();
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit CV. Please try again.", variant: "destructive" });
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

            <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
              <Send size={18} /> {isSubmitting ? "Submitting..." : "Submit CV"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
