
import { Mail, Github, Linkedin, Send, MessageCircle, Phone, MapPin } from "lucide-react";
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

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-100 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full">
              <MessageCircle className="h-8 w-8 text-cyan-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-cyan-200 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Phone className="h-6 w-6 text-cyan-600" />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:mr.alihusnain11@gmail.com"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                      <Mail className="h-6 w-6 text-cyan-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">mr.alihusnain11@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/ali-husnain-790929252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <Linkedin className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <p className="text-gray-600">Connect with me</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/Alihusnain1489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-gray-100 to-cyan-100 rounded-lg group-hover:from-gray-200 group-hover:to-cyan-200 transition-all duration-300">
                      <Github className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">GitHub</p>
                      <p className="text-gray-600">View my projects</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                    <div className="p-3 bg-gradient-to-r from-green-100 to-cyan-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Pakistan (Remote Available)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-cyan-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-cyan-600" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg"
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
