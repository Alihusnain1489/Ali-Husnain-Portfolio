
import { Send, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasShownAnimation = localStorage.getItem('contact-animation-shown');
    if (!hasShownAnimation) {
      setHasAnimated(true);
      localStorage.setItem('contact-animation-shown', 'true');
    }
  }, []);

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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden lendex-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-24 h-24 gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 gradient-glow rounded-full opacity-30 animate-pulse-custom"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6 ${hasAnimated ? 'animate-slide-up' : ''}`}>
            Contact
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-montserrat ${hasAnimated ? 'animate-slide-up delay-200' : ''}`}>
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info & Image */}
          <div className={`space-y-8 ${hasAnimated ? 'animate-slide-left delay-300' : ''}`}>
            {/* Profile Image */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 gradient-secondary p-1">
                  <img
                    src="/lovable-uploads/b643cda2-a597-4516-8e97-273dcd1c9351.png"
                    alt="Ali Husnain"
                    className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 gradient-primary rounded-full border-4 border-background flex items-center justify-center">
                  <span className="text-white text-sm">👋</span>
                </div>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-6">
              <Card className="border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 service-gradient-1 rounded-xl">
                    <FaEnvelope className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-foreground mb-1">Email Address</h4>
                    <p className="text-muted-foreground font-montserrat">mr.alihusnain11@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 service-gradient-2 rounded-xl">
                    <FaPhone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-foreground mb-1">Phone Number</h4>
                    <p className="text-muted-foreground font-montserrat">+92 349 0470871</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 service-gradient-3 rounded-xl">
                    <FaMapMarkerAlt className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground font-montserrat">Lahore, Pakistan</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-6">
              <a 
                href="https://github.com/Alihusnain1489"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ali-husnain-790929252/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`${hasAnimated ? 'animate-slide-right delay-400' : ''}`}>
            <Card className="border border-border bg-card shadow-xl">
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Send Message</h3>
                  <p className="text-muted-foreground font-montserrat">Ready to start your project?</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground rounded-lg h-12"
                      placeholder="Full Name"
                    />
                    
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground rounded-lg h-12"
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
                      className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground rounded-lg h-12"
                      placeholder="Phone Number"
                    />
                    
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground rounded-lg h-12"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="border-border focus:border-primary focus:ring-primary bg-background text-foreground placeholder-muted-foreground resize-none rounded-lg"
                    placeholder="Tell me about your project..."
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white font-montserrat font-medium py-4 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-0 shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
