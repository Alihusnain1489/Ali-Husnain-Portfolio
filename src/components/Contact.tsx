
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative lendex-pattern min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Info & Image */}
          <div className="space-y-8">
            {/* Professional Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-emerald-500/20">
                  <img
                    src="/lovable-uploads/b643cda2-a597-4516-8e97-273dcd1c9351.png"
                    alt="Ali Husnain - Contact"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 gradient-emerald rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                  👋
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="card-gradient card-hover border-0">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 icon-gradient-1 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-slate-300">mr.alihusnain11@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient card-hover border-0">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 icon-gradient-2 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-slate-300">+92 326 1052244</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient card-hover border-0">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 icon-gradient-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-slate-300">Lahore, Pakistan</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <Card className="card-gradient border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send Me a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-slate-800 border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 text-white placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-slate-800 border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="demo@example.com"
                      className="w-full bg-slate-800 border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 text-white placeholder-slate-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="Project Discussion"
                      className="w-full bg-slate-800 border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 text-white placeholder-slate-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full bg-slate-800 border-slate-600 focus:border-emerald-400 focus:ring-emerald-400 text-white placeholder-slate-400 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-emerald text-white font-medium px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 border-0 shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
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
