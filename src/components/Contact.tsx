
import { Send, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "f576c5bd-042c-4484-b925-a8c5b0a47f2c");
      formDataToSend.append("name", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      
      formDataToSend.append("from_name", "Portfolio Contact Form");
      formDataToSend.append("to_name", "Ali Husnain");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully! ✅",
          description: "Thank you for your message. I'll get back to you within 24 hours!",
        });
        setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error Sending Message ❌",
        description: "There was a problem sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-thin text-foreground mb-6 tracking-wide animate-fade-in">
            Contact
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's discuss your next project
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 text-center animate-fade-in delay-300">
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FaEnvelope className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h4 className="text-sm font-medium text-foreground">Email</h4>
              <p className="text-sm text-muted-foreground">mr.alihusnain11@gmail.com</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FaPhone className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h4 className="text-sm font-medium text-foreground">Phone</h4>
              <p className="text-sm text-muted-foreground">+92 349 0470871</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h4 className="text-sm font-medium text-foreground">Location</h4>
              <p className="text-sm text-muted-foreground">Lahore, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border border-border bg-card animate-fade-in delay-500">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground font-light"
                    placeholder="Full Name"
                  />
                  
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground font-light"
                    placeholder="Email Address"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground font-light"
                    placeholder="Phone Number"
                  />
                  
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground font-light"
                    placeholder="Subject"
                  />
                </div>
                
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground resize-none font-light"
                  placeholder="Your Message"
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-light tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in delay-700">
            <a 
              href="https://github.com/Alihusnain1489"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ali-husnain-790929252/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
