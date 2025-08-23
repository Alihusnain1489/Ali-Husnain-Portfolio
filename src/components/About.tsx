
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen lendex-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 gradient-glow rounded-full opacity-30 animate-pulse-custom"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
            About Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-montserrat animate-fade-in delay-200">
            I'm Mirta Akins UI/UX Designer specializing in Shopify & Webflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in delay-300">
            <p className="text-lg text-muted-foreground leading-relaxed font-montserrat">
              I'm a passionate front-end developer with a strong foundation in modern web technologies. 
              My journey in web development started during my studies at Virtual University of Pakistan, 
              where I developed a deep appreciation for creating user-centered digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-montserrat">
              With 6 months of remote work experience, I've had the opportunity to work on diverse projects, 
              collaborating with teams across different time zones and contributing to real-world applications 
              that serve users globally.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <h4 className="text-3xl font-playfair font-bold text-primary mb-2">6+</h4>
                <p className="text-muted-foreground font-montserrat">Months Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-playfair font-bold text-primary mb-2">10+</h4>
                <p className="text-muted-foreground font-montserrat">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-6 animate-fade-in delay-500">
            <Card className="border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 service-gradient-1 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">BS - Information Technology</p>
                  <p className="text-muted-foreground text-xs">Virtual University of Pakistan</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 service-gradient-2 rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-1">Experience</h3>
                  <p className="text-muted-foreground text-sm">6 Months Remote Work</p>
                  <p className="text-muted-foreground text-xs">Front-end Development</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 service-gradient-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">Lahore, Pakistan</p>
                  <p className="text-muted-foreground text-xs">Available for Remote Work</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
