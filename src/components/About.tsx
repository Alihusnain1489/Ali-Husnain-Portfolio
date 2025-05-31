
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100 to-transparent rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full">
              <Award className="h-8 w-8 text-cyan-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to creating exceptional digital experiences through clean code and innovative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate front-end developer with a strong foundation in modern web technologies. 
              My journey in web development started during my studies at Virtual University of Pakistan, 
              where I developed a deep appreciation for creating user-centered digital solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With 6 months of remote work experience, I've had the opportunity to work on diverse projects, 
              collaborating with teams across different time zones and contributing to real-world applications 
              that serve users globally.
            </p>
            <p className="text-lg text-gray-700">
              I'm constantly learning and staying up-to-date with the latest trends and best practices 
              in front-end development, always striving to write clean, efficient, and maintainable code.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                    <p className="text-gray-700 font-medium">BS - Information Technology</p>
                    <p className="text-gray-600">Virtual University of Pakistan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
                    <p className="text-gray-700 font-medium">6 Months Remote Work</p>
                    <p className="text-gray-600">Front-end Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700 font-medium">Pakistan</p>
                    <p className="text-gray-600">Available for Remote Work</p>
                  </div>
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
