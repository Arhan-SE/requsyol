import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Upload, Send, AlertCircle } from "lucide-react";
import {
  safeNameSchema,
  safeEmailSchema,
  safePhoneSchema,
  safeTextSchema,
  safeShortTextSchema,
  recordPageLoadTime,
  isSubmissionTooFast,
  isDuplicateSubmission,
  validateUploadedFile,
} from "@/lib/formSecurity";

const formSchema = z.object({
  companyName: safeShortTextSchema("Company name"),
  contactPerson: safeNameSchema,
  email: safeEmailSchema,
  phone: safePhoneSchema,
  roleRequired: safeTextSchema(2, 2000),
  urgency: z.string().min(1, "Please select urgency"),
  honeypot: z.string().max(0),
});

const EmployerInquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [jobFile, setJobFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [sanitizedFileName, setSanitizedFileName] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    recordPageLoadTime();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { companyName: "", contactPerson: "", email: "", phone: "", roleRequired: "", urgency: "", honeypot: "" },
  });

  const handleFileChange = async (file: File | undefined) => {
    if (!file) {
      setJobFile(null);
      setFileError(null);
      setSanitizedFileName(null);
      return;
    }
    const result = await validateUploadedFile(file);
    if (result.ok === false) {
      setFileError(result.error);
      setJobFile(null);
      setSanitizedFileName(null);
    } else {
      setFileError(null);
      setJobFile(file);
      setSanitizedFileName(result.sanitizedName);
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (data.honeypot) return;

    if (isSubmissionTooFast()) {
      toast({ title: "Something went wrong", description: "Please wait a moment and try again.", variant: "destructive" });
      return;
    }

    const { honeypot: _hp, ...payload } = data;
    if (await isDuplicateSubmission(payload)) {
      toast({ title: "Duplicate submission", description: "This inquiry has already been submitted.", variant: "destructive" });
      return;
    }

    toast({ title: "Inquiry Submitted!", description: "We'll get back to you within 24 hours." });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-4">
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground">Your inquiry has been received. A member of our team will contact you within 24 hours to discuss your staffing needs.</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Hire Talent</h1>
            <p className="text-muted-foreground text-center mb-8">Tell us about your staffing needs and we'll find the right people</p>
          </ScrollReveal>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <Input {...form.register("honeypot")} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="companyName" render={({ field }) => (
                  <FormItem><FormLabel>Company Name</FormLabel><FormControl><Input placeholder="Acme Ltd" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="contactPerson" render={({ field }) => (
                  <FormItem><FormLabel>Contact Person</FormLabel><FormControl><Input placeholder="Jane Smith" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="hire@company.com" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+44 20 1234 5678" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              <FormField control={form.control} name="roleRequired" render={({ field }) => (
                <FormItem><FormLabel>Role Required</FormLabel><FormControl><Textarea placeholder="Describe the role(s) you need to fill..." rows={3} {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="urgency" render={({ field }) => (
                <FormItem><FormLabel>Urgency / Timeline</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select timeline..." /></SelectTrigger></FormControl>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                      <SelectItem value="soon">Soon (1-2 weeks)</SelectItem>
                      <SelectItem value="planned">Planned (1 month+)</SelectItem>
                      <SelectItem value="ongoing">Ongoing Requirement</SelectItem>
                    </SelectContent>
                  </Select>
                <FormMessage /></FormItem>
              )} />

              {/* File upload with hardened validation */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Job Description (optional)</label>
                <div
                  className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => document.getElementById("job-upload")?.click()}
                >
                  <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {sanitizedFileName ?? "Upload job description (PDF, DOC, DOCX — max 5 MB)"}
                  </p>
                  <input
                    id="job-upload"
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

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send size={18} /> Submit Inquiry
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default EmployerInquiry;
