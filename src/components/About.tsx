
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-thin text-foreground mb-6 tracking-wide animate-fade-in">
            About
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
            Passionate about creating elegant digital solutions with clean, efficient code
          </p>
        </div>

        <div className="space-y-12">
          <div className="text-center animate-fade-in delay-300">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate front-end developer with a strong foundation in modern web technologies. 
              My journey in web development started during my studies at Virtual University of Pakistan, 
              where I developed a deep appreciation for creating user-centered digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With 6 months of remote work experience, I've had the opportunity to work on diverse projects, 
              collaborating with teams across different time zones and contributing to real-world applications 
              that serve users globally.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm constantly learning and staying up-to-date with the latest trends and best practices 
              in front-end development, always striving to write clean, efficient, and maintainable code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in delay-500">
            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">BS - Information Technology</p>
                <p className="text-muted-foreground text-xs">Virtual University of Pakistan</p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">6 Months Remote Work</p>
                <p className="text-muted-foreground text-xs">Front-end Development</p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">Pakistan</p>
                <p className="text-muted-foreground text-xs">Available for Remote Work</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
