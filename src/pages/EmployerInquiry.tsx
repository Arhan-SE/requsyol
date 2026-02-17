import { useState } from "react";
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
import { CheckCircle, Upload, Send } from "lucide-react";

const formSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  roleRequired: z.string().min(2, "Role description is required"),
  urgency: z.string().min(1, "Please select urgency"),
  honeypot: z.string().max(0), // spam prevention
});

const EmployerInquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [jobFile, setJobFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { companyName: "", contactPerson: "", email: "", phone: "", roleRequired: "", urgency: "", honeypot: "" },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (data.honeypot) return; // bot detected
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
              <div className="hidden"><Input {...form.register("honeypot")} tabIndex={-1} autoComplete="off" /></div>

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

              {/* Optional file upload */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Job Description (optional)</label>
                <div
                  className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => document.getElementById("job-upload")?.click()}
                >
                  <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">{jobFile ? jobFile.name : "Upload job description (PDF, DOC)"}</p>
                  <input id="job-upload" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => setJobFile(e.target.files?.[0] || null)} />
                </div>
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
