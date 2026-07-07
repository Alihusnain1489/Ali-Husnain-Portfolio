import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin } from "lucide-react";
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
    <section id="contact" className="relative bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — headline + info (no photo) */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4 sm:mb-6">
              Get in touch
            </p>
            <h2 className="font-extrabold uppercase leading-[1.1] text-3xl sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              <span className="text-white">Let's build your</span>
              <br />
              <span className="text-blue-500">next product</span>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-md text-white/60 text-base sm:text-lg">
              Available for full-stack engineering, AI automation and freelance product work.
              I typically respond within a business day.
            </p>

            <div className="mt-8 sm:mt-10 space-y-4 text-sm">
              <a
                href="mailto:mr.alihusnain11@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">mr.alihusnain11@gmail.com</span>
              </a>
              <a
                href="tel:+923261052244"
                className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                +92 326 1052244
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                Lahore, Pakistan · Remote worldwide
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8">
              <a
                href="https://github.com/Alihusnain1489"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-blue-400 transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-blue-400 transition"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:mr.alihusnain11@gmail.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-blue-400 transition"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          {/* Right — form card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-12 backdrop-blur-sm"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-400">
              Send a message
            </p>
            <h3 className="mt-3 font-extrabold text-2xl sm:text-3xl text-white">
              Tell me about your project
            </h3>
            <div className="my-6 sm:my-8 h-px w-full bg-white/10" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/50">
                  First name
                </label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-blue-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/50">
                  Last name
                </label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-wider text-white/50">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-blue-500"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-wider text-white/50">
                Subject
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-blue-500"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-wider text-white/50">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 sm:mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60 sm:w-auto sm:justify-start"
            >
              {isSubmitting ? "Sending..." : "Send message"} <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;