
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full border border-emerald-500/30 transform hover:scale-110 transition-all duration-300 animate-scale-in">
              <MessageCircle className="h-10 w-10 text-emerald-400" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            LET'S TALK
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Contact me and let me know how I can help with your project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Information - Smaller Left Side */}
          <div className="space-y-6 animate-slide-up">
            <Card className="hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border-slate-700 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm transform hover:-translate-y-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Email</h4>
                      <p className="text-xs text-gray-300">mr.alihusnain11@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Phone</h4>
                      <p className="text-xs text-gray-300">+92 349 0470871</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Location</h4>
                      <p className="text-xs text-gray-300">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border-slate-700 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm transform hover:-translate-y-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Follow Me</h3>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://github.com/Alihusnain1489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-gray-500/20 to-slate-500/20 hover:from-gray-500/30 hover:to-slate-500/30 rounded-full transition-all duration-300 hover:scale-125 transform hover:-translate-y-1 shadow-lg hover:shadow-gray-500/20"
                  >
                    <FaGithub className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ali-husnain-790929252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 rounded-full transition-all duration-300 hover:scale-125 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20"
                  >
                    <FaLinkedin className="h-5 w-5 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Larger Right Side */}
          <div className="lg:col-span-2 animate-slide-up delay-300">
            <Card className="hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border-slate-700 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                  <p className="text-gray-400">Get in touch and let me know how I can help</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 h-12 transition-all duration-300 group-hover:border-emerald-500/50"
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
                        className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 h-12 transition-all duration-300 group-hover:border-emerald-500/50"
                        placeholder="Your Email Address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 h-12 transition-all duration-300 group-hover:border-emerald-500/50"
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
                        className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 h-12 transition-all duration-300 group-hover:border-emerald-500/50"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 resize-none transition-all duration-300 group-hover:border-emerald-500/50"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 h-12 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    {isSubmitting ? "Sending Message..." : "HIRE ME"}
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
