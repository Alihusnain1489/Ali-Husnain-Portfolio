
import { Send, MessageCircle, Phone, Mail as MailIcon, MapPin, Clock, Sparkles } from "lucide-react";
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-float-horizontal delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce-horizontal delay-300"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce-horizontal delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="p-6 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-3xl border border-emerald-500/40 backdrop-blur-sm animate-pulse-glow">
                <MessageCircle className="h-12 w-12 text-emerald-400 animate-wiggle" />
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2 animate-bounce-horizontal">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full p-1 animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 animate-slide-in-left">
            LET'S <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">CONNECT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-in-right delay-200">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together!
          </p>
          <div className="mt-6 w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Enhanced Contact Information - Left Side (2 columns) */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in-left delay-300">
            {/* Contact Details Card */}
            <Card className="hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border-emerald-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group hover:bg-slate-700/30 p-4 rounded-xl transition-all duration-300 animate-fade-in-right delay-100">
                    <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                      <FaEnvelope className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Email</h4>
                      <p className="text-sm text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">mr.alihusnain11@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group hover:bg-slate-700/30 p-4 rounded-xl transition-all duration-300 animate-fade-in-right delay-200">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                      <FaPhone className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Phone</h4>
                      <p className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors duration-300">+92 349 0470871</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group hover:bg-slate-700/30 p-4 rounded-xl transition-all duration-300 animate-fade-in-right delay-300">
                    <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                      <FaMapMarkerAlt className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Location</h4>
                      <p className="text-sm text-gray-300 group-hover:text-green-400 transition-colors duration-300">Lahore, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group hover:bg-slate-700/30 p-4 rounded-xl transition-all duration-300 animate-fade-in-right delay-400">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                      <Clock className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Response Time</h4>
                      <p className="text-sm text-gray-300 group-hover:text-purple-400 transition-colors duration-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border-emerald-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg">
                    <Sparkles className="h-6 w-6 text-emerald-400 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Follow Me</h3>
                </div>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://github.com/Alihusnain1489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-gray-500/20 to-slate-500/20 hover:from-gray-500/40 hover:to-slate-500/40 rounded-2xl transition-all duration-300 hover:scale-125 transform hover:-translate-y-2 shadow-lg hover:shadow-gray-500/30 border border-gray-500/20 animate-bounce-horizontal delay-100"
                  >
                    <FaGithub className="h-6 w-6 text-gray-300 hover:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ali-husnain-790929252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/40 hover:to-cyan-500/40 rounded-2xl transition-all duration-300 hover:scale-125 transform hover:-translate-y-2 shadow-lg hover:shadow-blue-500/30 border border-blue-500/20 animate-bounce-horizontal delay-200"
                  >
                    <FaLinkedin className="h-6 w-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form - Right Side (3 columns) */}
          <div className="lg:col-span-3 animate-slide-in-right delay-400">
            <Card className="hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border-emerald-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm hover-lift">
              <CardContent className="p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg">
                      <Send className="h-6 w-6 text-emerald-400 animate-bounce-horizontal" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Send Message</h3>
                  </div>
                  <p className="text-gray-400 text-lg">Let's discuss your project and bring your ideas to life</p>
                  <div className="mt-4 w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group animate-fade-in-left delay-100">
                      <label className="block text-sm font-semibold text-emerald-400 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 h-12 transition-all duration-300 group-hover:border-emerald-500/50 rounded-xl"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="relative group animate-fade-in-right delay-200">
                      <label className="block text-sm font-semibold text-emerald-400 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 h-12 transition-all duration-300 group-hover:border-emerald-500/50 rounded-xl"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group animate-fade-in-left delay-300">
                      <label className="block text-sm font-semibold text-emerald-400 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 h-12 transition-all duration-300 group-hover:border-emerald-500/50 rounded-xl"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="relative group animate-fade-in-right delay-400">
                      <label className="block text-sm font-semibold text-emerald-400 mb-2">Subject *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 h-12 transition-all duration-300 group-hover:border-emerald-500/50 rounded-xl"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>
                  
                  <div className="relative group animate-fade-in delay-500">
                    <label className="block text-sm font-semibold text-emerald-400 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      disabled={isSubmitting}
                      className="w-full border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 bg-slate-700/50 text-white placeholder-gray-400 resize-none transition-all duration-300 group-hover:border-emerald-500/50 rounded-xl"
                      placeholder="Tell me about your project, ideas, or how I can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 h-14 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 rounded-xl animate-pulse-glow"
                  >
                    <Send className="mr-3 h-6 w-6 animate-bounce-horizontal" />
                    {isSubmitting ? "Sending Message..." : "SEND MESSAGE"}
                    <Sparkles className="ml-3 h-5 w-5 animate-pulse" />
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
