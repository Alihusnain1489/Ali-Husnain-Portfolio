
import { Send, MessageCircle, Phone, MapPin } from "lucide-react";
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
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "mr.alihusnain11@gmail.com",
      href: "mailto:mr.alihusnain11@gmail.com",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ali-husnain-790929252/",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "View my projects",
      href: "https://github.com/Alihusnain1489",
      color: "text-gray-300",
      bgColor: "bg-gray-500/20"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Pakistan (Remote Available)",
      href: "#",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('/lovable-uploads/364fefa7-ccda-43ab-acab-bd6bcb0c7b22.png')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <MessageCircle className="h-8 w-8 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <FaPhone className="h-6 w-6 text-cyan-400" />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a 
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? "_blank" : undefined}
                      rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group hover:scale-105 ${method.bgColor} hover:bg-opacity-30 border border-transparent hover:border-cyan-500/30`}
                    >
                      <div className={`p-3 rounded-lg ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-white">{method.title}</p>
                        <p className="text-gray-300">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media Icons Section */}
            <Card className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  Follow Me
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

          <Card className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-cyan-400" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400 bg-black/50 text-white placeholder-gray-400"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
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
