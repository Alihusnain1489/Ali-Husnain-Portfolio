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
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <MessageCircle className="h-8 w-8 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <Card className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-cyan-500/20 rounded-lg">
                      <FaEnvelope className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                      <p className="text-gray-300">mr.alihusnain11@gmail.com</p>
                      <p className="text-gray-400 text-sm">support@alihusnain.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-blue-500/20 rounded-lg">
                      <FaPhone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                      <p className="text-gray-300">+92 349 0470871</p>
                      <p className="text-gray-400 text-sm">Available for calls</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-green-500/20 rounded-lg">
                      <FaMapMarkerAlt className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-300">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://github.com/Alihusnain1489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-500/20 hover:bg-gray-500/30 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub className="h-8 w-8 text-gray-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ali-husnain-790929252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="h-8 w-8 text-blue-400" />
                  </a>
                  <a 
                    href="mailto:mr.alihusnain11@gmail.com"
                    className="p-4 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <SiGmail className="h-8 w-8 text-cyan-400" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400 h-12"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400 h-12"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400 h-12"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400 h-12"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 h-12 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;