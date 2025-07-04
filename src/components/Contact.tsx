import { Send, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
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
      
      // Add some additional info
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-emerald-400/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-green-400/40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-emerald-400/30 rounded-full animate-bounce delay-900"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20 mb-4 animate-scale-in">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="text-green-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and bring your ideas to life. I'm always excited to work on new projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Form */}
          <div className="animate-slide-up">
            <Card className="hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 border-green-400/30 bg-gray-800/80 backdrop-blur-sm transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                  <p className="text-gray-400">Get in touch and let me know how I can help</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div className="relative group">
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-gray-600 focus:border-green-400 focus:ring-green-400 bg-gray-700/50 text-white placeholder-gray-400 h-14 text-lg transition-all duration-300 group-hover:border-green-500/50"
                        placeholder="Your Full Name"
                      />
                    </div>
                    
                    <div className="relative group">
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-gray-600 focus:border-green-400 focus:ring-green-400 bg-gray-700/50 text-white placeholder-gray-400 h-14 text-lg transition-all duration-300 group-hover:border-green-500/50"
                        placeholder="Your Email Address"
                      />
                    </div>
                    
                    <div className="relative group">
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full border-gray-600 focus:border-green-400 focus:ring-green-400 bg-gray-700/50 text-white placeholder-gray-400 h-14 text-lg transition-all duration-300 group-hover:border-green-500/50"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    
                    <div className="relative group">
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-gray-600 focus:border-green-400 focus:ring-green-400 bg-gray-700/50 text-white placeholder-gray-400 h-14 text-lg transition-all duration-300 group-hover:border-green-500/50"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div className="relative group">
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        disabled={isSubmitting}
                        className="w-full border-gray-600 focus:border-green-400 focus:ring-green-400 bg-gray-700/50 text-white placeholder-gray-400 resize-none text-lg transition-all duration-300 group-hover:border-green-500/50"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-gray-900 shadow-xl hover:shadow-green-500/30 transition-all duration-300 h-14 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Info & Illustration */}
          <div className="space-y-8 animate-slide-up delay-300">
            {/* Contact Information */}
            <Card className="hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 border-green-400/30 bg-gray-800/80 backdrop-blur-sm transform hover:-translate-y-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group hover:bg-gray-700/30 p-4 rounded-lg transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-300">mr.alihusnain11@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group hover:bg-gray-700/30 p-4 rounded-lg transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Phone</h4>
                      <p className="text-gray-300">+92 349 0470871</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group hover:bg-gray-700/30 p-4 rounded-lg transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Location</h4>
                      <p className="text-gray-300">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 border-green-400/30 bg-gray-800/80 backdrop-blur-sm transform hover:-translate-y-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://github.com/Alihusnain1489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-gray-500/20 to-gray-600/20 hover:from-green-400/20 hover:to-emerald-400/20 rounded-full transition-all duration-300 hover:scale-125 transform hover:-translate-y-2 shadow-lg hover:shadow-green-500/20"
                  >
                    <FaGithub className="h-8 w-8 text-gray-300 hover:text-green-400 transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ali-husnain-790929252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-green-400/20 hover:to-emerald-400/20 rounded-full transition-all duration-300 hover:scale-125 transform hover:-translate-y-2 shadow-lg hover:shadow-green-500/20"
                  >
                    <FaLinkedin className="h-8 w-8 text-blue-400 hover:text-green-400 transition-colors duration-300" />
                  </a>
                  <a 
                    href="mailto:mr.alihusnain11@gmail.com"
                    className="p-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 hover:from-green-500/30 hover:to-emerald-500/30 rounded-full transition-all duration-300 hover:scale-125 transform hover:-translate-y-2 shadow-lg hover:shadow-green-500/20"
                  >
                    <SiGmail className="h-8 w-8 text-green-400 hover:text-emerald-300 transition-colors duration-300" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Illustration Area */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-green-400/30 flex items-center justify-center group hover:from-gray-600/30 hover:to-gray-700/30 transition-all duration-500">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                    <MessageCircle className="h-16 w-16 text-green-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-300 text-lg">Let's start a conversation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
