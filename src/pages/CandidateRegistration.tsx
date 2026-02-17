import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Upload, CheckCircle } from "lucide-react";

const step1Schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
});

const step2Schema = z.object({
  address: z.string().min(5, "Address is required"),
  postcode: z.string().min(3, "Postcode is required"),
  birthDate: z.string().min(1, "Birth date is required"),
  referralSource: z.string().min(1, "Please select how you heard about us"),
});

const steps = ["Personal Details", "Address & Details", "Upload Resume"];

const CandidateRegistration = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form1 = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: { firstName: "", lastName: "", phone: "", email: "" },
  });

  const form2 = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: { address: "", postcode: "", birthDate: "", referralSource: "" },
  });

  const nextStep = async () => {
    if (step === 0) {
      const valid = await form1.trigger();
      if (!valid) return;
    } else if (step === 1) {
      const valid = await form2.trigger();
      if (!valid) return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  const handleSubmit = () => {
    toast({ title: "Registration Submitted!", description: "We'll be in touch shortly." });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground">Your registration has been submitted. Our team will review your details and be in touch shortly.</p>
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Candidate Registration</h1>
            <p className="text-muted-foreground text-center mb-8">Join our talent pool and find your next opportunity</p>
          </ScrollReveal>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              {steps.map((s, i) => (
                <span key={s} className={i <= step ? "text-foreground font-medium" : ""}>{s}</span>
              ))}
            </div>
            <Progress value={((step + 1) / steps.length) * 100} className="h-1" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && (
                <Form {...form1}>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={form1.control} name="firstName" render={({ field }) => (
                        <FormItem><FormLabel>First Name</FormLabel><FormControl><Input placeholder="John" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form1.control} name="lastName" render={({ field }) => (
                        <FormItem><FormLabel>Last Name</FormLabel><FormControl><Input placeholder="Doe" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <FormField control={form1.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+44 7000 000000" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form1.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </form>
                </Form>
              )}

              {step === 1 && (
                <Form {...form2}>
                  <form className="space-y-4">
                    <FormField control={form2.control} name="address" render={({ field }) => (
                      <FormItem><FormLabel>Full Address</FormLabel><FormControl><Input placeholder="123 Main St, London" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form2.control} name="postcode" render={({ field }) => (
                      <FormItem><FormLabel>Postcode</FormLabel><FormControl><Input placeholder="SW1A 1AA" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form2.control} name="birthDate" render={({ field }) => (
                      <FormItem><FormLabel>Date of Birth</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form2.control} name="referralSource" render={({ field }) => (
                      <FormItem><FormLabel>How did you hear about us?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Friend/Colleague</SelectItem>
                            <SelectItem value="jobsite">Job Board</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      <FormMessage /></FormItem>
                    )} />
                  </form>
                </Form>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div
                    className="border-2 border-dashed border-border rounded-lg p-12 text-center cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => document.getElementById("resume-upload")?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files?.[0];
                      if (file) setResumeFile(file);
                    }}
                  >
                    <Upload size={40} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-foreground font-medium mb-1">
                      {resumeFile ? resumeFile.name : "Drop your resume here or click to browse"}
                    </p>
                    <p className="text-sm text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={() => setStep((s) => Math.max(s - 1, 0))} disabled={step === 0}>
              <ArrowLeft size={16} className="mr-2" /> Back
            </Button>
            {step < 2 ? (
              <Button onClick={nextStep}>
                Next <ArrowRight size={16} className="ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit}>Submit Registration</Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CandidateRegistration;
