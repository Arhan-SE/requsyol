import { useState } from "react";
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

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = () => {
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Contact Us</h1>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">Have a question or need staffing support? Reach out and we'll respond within 24 hours.</p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: "info@requsyol.co.uk" },
                    { icon: Phone, text: "+44 (0) 123 456 7890" },
                    { icon: MapPin, text: "London, United Kingdom" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-muted-foreground">
                      <Icon size={20} />
                      <span>{text}</span>
                    </div>
                  ))}
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
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea rows={5} placeholder="How can we help?" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" className="w-full gap-2"><Send size={18} /> Send Message</Button>
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
