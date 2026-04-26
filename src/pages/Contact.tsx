import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import {
  safeNameSchema,
  safeEmailSchema,
  safeTextSchema,
  recordPageLoadTime,
  isSubmissionTooFast,
} from "@/lib/formSecurity";
import { sendEmail } from "@/lib/emailService";

const formSchema = z.object({
  name: safeNameSchema,
  email: safeEmailSchema,
  message: safeTextSchema(10, 2000),
  honeypot: z.string().max(0),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    recordPageLoadTime();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "", honeypot: "" },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Bot trap
    if (data.honeypot) return;

    // Timing guard
    if (isSubmissionTooFast()) {
      toast({ title: "Something went wrong", description: "Please wait a moment and try again.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail({
        email: data.email,
        name: data.name,
        message: data.message,
        type: 'contact',
      });
      toast({ title: "Message Sent!", description: "We've received your inquiry and will respond within 24 hours." });
      form.reset();
      setSubmitted(true);
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="pt-28 md:pt-40 pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1
              className="font-barlow font-black uppercase text-[clamp(3rem,10vw,7rem)] leading-[0.88] tracking-tight text-transparent bg-clip-text mb-12"
              style={{ backgroundImage: "linear-gradient(135deg, #56A8D6 0%, hsl(var(--logo-orange)) 50%, #2F7FB2 100%)" }}
            >
              Contact Us.
            </h1>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">Have a question or need staffing support? Reach out and we'll respond within 24 hours.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Mail size={20} className="mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <span>hr@requsyol.co.uk</span>
                      <span>Loyster.pascoal@requsyol.co.uk</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Phone size={20} className="mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <span>For Registrations (Queency Rodrigues): +44 7990 324644</span>
                      <span>For Business Enquiries (Loyster Pascoal): +44 7466 989804</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                    <span>Suite 23, 2nd Floor, Unimix House, Park Royal, London NW10 7TR</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-foreground font-medium">Thanks! We'll be in touch.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* Honeypot — hidden from humans, attractive to bots */}
                    <div className="hidden" aria-hidden="true">
                      <Input {...form.register("honeypot")} tabIndex={-1} autoComplete="off" />
                    </div>

                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea rows={5} placeholder="How can we help?" {...field} disabled={isSubmitting} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" className="w-full gap-2" disabled={isSubmitting}><Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}</Button>
                  </form>
                </Form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
