
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "TypeScript", level: 80, color: "bg-blue-600" },
    { name: "Redux Toolkit", level: 75, color: "bg-purple-600" },
    { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
    { name: "CSS", level: 90, color: "bg-blue-400" },
    { name: "HTML", level: 95, color: "bg-orange-500" },
    { name: "Java", level: 70, color: "bg-red-600" },
    { name: "Spring Boot", level: 65, color: "bg-green-600" },
  ];

  const categories = {
    "Frontend": ["React", "JavaScript", "TypeScript", "Redux Toolkit", "Tailwind CSS", "CSS", "HTML"],
    "Backend": ["Java", "Spring Boot"]
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <Card key={category} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  {category} Technologies
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => categorySkills.includes(skill.name))
                    .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
