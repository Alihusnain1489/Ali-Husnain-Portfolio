import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", { body: formData });
      if (error) throw error;
      toast({ title: "Message sent!", description: "Thanks — I'll get back to you shortly." });
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again in a moment.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — arched portrait + info */}
          <div>
            <p className="eyebrow mb-6">Get in touch</p>
            <h2 className="font-playfair text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Let's build your next <span className="italic text-[hsl(var(--coral))]">product</span>
            </h2>
            <p className="mt-6 max-w-md text-foreground/70">
              Available for full-stack engineering, AI automation and freelance product work.
              I typically respond within a business day.
            </p>

            <div className="mt-10 relative w-full max-w-sm">
              <div className="arch-top overflow-hidden bg-secondary aspect-[3/4]">
                <img
                  src="/lovable-uploads/b643cda2-a597-4516-8e97-273dcd1c9351.png"
                  alt="Ali Husnain"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute left-4 bottom-4">
                  <span className="location-pill"><MapPin className="h-3.5 w-3.5" /> Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-4 text-sm">
              <a href="mailto:mr.alihusnain11@gmail.com" className="flex items-center gap-3 text-foreground hover:text-[hsl(var(--coral))]">
                <Mail className="h-4 w-4" /> mr.alihusnain11@gmail.com
              </a>
              <a href="tel:+923261052244" className="flex items-center gap-3 text-foreground hover:text-[hsl(var(--coral))]">
                <Phone className="h-4 w-4" /> +92 326 1052244
              </a>
              <div className="flex items-center gap-3 text-foreground/70">
                <MapPin className="h-4 w-4" /> Lahore, Pakistan · Remote worldwide
              </div>
            </div>
          </div>

          {/* Right — form on ink block */}
          <form onSubmit={handleSubmit} className="ink-block p-8 lg:p-12">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Send a message</p>
            <h3 className="mt-3 font-playfair text-3xl text-white">Tell me about your project</h3>
            <div className="hairline my-8 !bg-white/20" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">First name</label>
                <Input name="firstName" value={formData.firstName} onChange={handleChange} required
                  className="rounded-none border-0 border-b border-white/30 bg-transparent px-0 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[hsl(var(--coral))]" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Last name</label>
                <Input name="lastName" value={formData.lastName} onChange={handleChange} required
                  className="rounded-none border-0 border-b border-white/30 bg-transparent px-0 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[hsl(var(--coral))]" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Email</label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required
                className="rounded-none border-0 border-b border-white/30 bg-transparent px-0 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[hsl(var(--coral))]" />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Subject</label>
              <Input name="subject" value={formData.subject} onChange={handleChange} required
                className="rounded-none border-0 border-b border-white/30 bg-transparent px-0 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[hsl(var(--coral))]" />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Message</label>
              <Textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                className="rounded-none border-0 border-b border-white/30 bg-transparent px-0 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[hsl(var(--coral))] resize-none" />
            </div>

            <button type="submit" disabled={isSubmitting}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--coral))] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60">
              {isSubmitting ? "Sending..." : "Send message"} <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
