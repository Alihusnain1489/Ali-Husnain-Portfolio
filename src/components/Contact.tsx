
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
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('/lovable-uploads/364fefa7-ccda-43ab-acab-bd6bcb0c7b22.png')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/90"></div>
      
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
                      <p className="text-gray-300">+92 (xxx) xxx-xxxx</p>
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
                      <p className="text-gray-300">Pakistan</p>
                      <p className="text-gray-300">Remote Available</p>
                      <p className="text-gray-400 text-sm">Worldwide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  Availability
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Monday - Friday:</span>
                    <span className="text-gray-300">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Saturday:</span>
                    <span className="text-gray-300">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Sunday:</span>
                    <span className="text-gray-300">Closed</span>
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
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 h-12 text-lg font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
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
