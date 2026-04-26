import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle, AlertCircle, Send } from "lucide-react";
import {
  safeNameSchema,
  safeEmailSchema,
  safePhoneSchema,
  recordPageLoadTime,
  isSubmissionTooFast,
  validateUploadedFile,
} from "@/lib/formSecurity";
import { sendEmail } from "@/lib/emailService";

const formSchema = z.object({
  firstName: safeNameSchema,
  lastName: safeNameSchema,
  phone: safePhoneSchema,
  email: safeEmailSchema,
  honeypot: z.string().max(0),
});

const CandidateRegistration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [sanitizedFileName, setSanitizedFileName] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    recordPageLoadTime();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", lastName: "", phone: "", email: "", honeypot: "" },
  });

  const handleFileChange = async (file: File | undefined) => {
    if (!file) {
      setResumeFile(null);
      setFileError(null);
      setSanitizedFileName(null);
      return;
    }
    const result = await validateUploadedFile(file);
    if (result.ok === false) {
      setFileError(result.error);
      setResumeFile(null);
      setSanitizedFileName(null);
    } else {
      setFileError(null);
      setResumeFile(file);
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
      const message = `First Name: ${data.firstName}\nLast Name: ${data.lastName}\nPhone: ${data.phone}`;
      await sendEmail({
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
        message,
        type: 'candidate',
        file: resumeFile || undefined,
      });
      toast({ title: "Registration Submitted!", description: "We've received your application and will be in touch shortly." });
      form.reset();
      setSubmitted(true);
    } catch (error) {
      const err = error as any;
      if (err.status === 429) {
        toast({
          title: "Please try again later",
          description: "We're experiencing high volume. Please wait a few minutes and try again.",
          variant: "destructive"
        });
      } else {
        toast({ title: "Error", description: "Failed to submit registration. Please try again.", variant: "destructive" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-40">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-4">
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground">We've received your application. Our team will review your details and be in touch shortly.</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-40 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Candidate Registration</h1>
            <p className="text-muted-foreground text-center mb-8">Join our talent pool and find your next opportunity</p>
          </ScrollReveal>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <Input {...form.register("honeypot")} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem><FormLabel>First Name</FormLabel><FormControl><Input placeholder="John" {...field} disabled={isSubmitting} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem><FormLabel>Last Name</FormLabel><FormControl><Input placeholder="Doe" {...field} disabled={isSubmitting} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+44 7000 000000" {...field} disabled={isSubmitting} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="john@example.com" {...field} disabled={isSubmitting} /></FormControl><FormMessage /></FormItem>
              )} />

              {/* Resume Upload */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Upload Resume</label>
                <div
                  className="border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => document.getElementById("resume-upload")?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleFileChange(e.dataTransfer.files?.[0]);
                  }}
                >
                  <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
                  <p className="text-foreground font-medium mb-1">
                    {sanitizedFileName ?? "Drop your resume here or click to browse"}
                  </p>
                  <p className="text-sm text-muted-foreground">PDF, DOC, DOCX (Max 5 MB)</p>
                  <input
                    id="resume-upload"
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

              <Button type="submit" size="lg" className="w-full gap-2" disabled={!!fileError || isSubmitting}>
                <Send size={18} /> {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default CandidateRegistration;
