import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { 
  Code, 
  Cpu, 
  Zap, 
  BookOpen, 
  Coffee, 
  Palette, 
  Music, 
  Gamepad2, 
  Camera, 
  Lightbulb,
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Terminal,
  Wrench,
  Cake,
  Building,
  Calculator,
  PaintBucket,
  Headphones,
  FileText,
  ExternalLink
} from 'lucide-react';

// Color palette system - easy to switch between different combinations
const colorPalettes = {
  ocean: {
    primary: 'bg-slate-900',
    secondary: 'bg-blue-600',
    accent: 'bg-cyan-500',
    highlight: 'bg-teal-400',
    light: 'bg-blue-50',
    primaryText: 'text-slate-900',
    secondaryText: 'text-blue-600',
    accentText: 'text-cyan-500',
    highlightText: 'text-teal-400',
    lightText: 'text-blue-50'
  },
  sunset: {
    primary: 'bg-orange-900',
    secondary: 'bg-red-600',
    accent: 'bg-yellow-500',
    highlight: 'bg-orange-400',
    light: 'bg-orange-50',
    primaryText: 'text-orange-900',
    secondaryText: 'text-red-600',
    accentText: 'text-yellow-500',
    highlightText: 'text-orange-400',
    lightText: 'text-orange-50'
  },
  forest: {
    primary: 'bg-green-900',
    secondary: 'bg-emerald-600',
    accent: 'bg-lime-500',
    highlight: 'bg-green-400',
    light: 'bg-green-50',
    primaryText: 'text-green-900',
    secondaryText: 'text-emerald-600',
    accentText: 'text-lime-500',
    highlightText: 'text-green-400',
    lightText: 'text-green-50'
  },
  purple: {
    primary: 'bg-purple-900',
    secondary: 'bg-violet-600',
    accent: 'bg-fuchsia-500',
    highlight: 'bg-purple-400',
    light: 'bg-purple-50',
    // ... text colors
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPalette, setCurrentPalette] = useState('ocean');
  const palette = colorPalettes[currentPalette];

  const Navigation = () => (
    <nav className={`${palette.primary} ${palette.lightText} p-4 shadow-lg`}>
      <div className="max-w-6xl mx-auto flex justify-between items-left">
        <h1 className="text-2xl font-bold">Zak ElSeht</h1>
        <div className="flex space-x-6">
          {['home', 'hobbies', 'projects', 'interests', 'resources'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize transition-colors duration-200 ${
                currentPage === page 
                  ? `${palette.accentText} border-b-2 border-current` 
                  : `hover:${palette.highlightText}`
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className={`min-h-screen ${palette.light}`}>
      <section className={`${palette.primary} ${palette.lightText} py-20`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Electrical & Software Engineer</h1>
          <p className="text-xl mb-8 opacity-90">Building the future through code and circuits</p>
          <div className="flex justify-center space-x-4">
            <Mail className={`w-6 h-6 ${palette.highlightText}`} />
            <Github className={`w-6 h-6 ${palette.highlightText}`} />
            <Linkedin className={`w-6 h-6 ${palette.highlightText}`} />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold ${palette.primaryText} mb-8 text-center`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${palette.secondary} ${palette.lightText} p-6 rounded-lg`}>
              <Cpu className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
              <p>Passionate about bridging hardware and software, creating innovative solutions that combine electrical engineering principles with cutting-edge programming.</p>
            </div>
            <div className={`${palette.accent} text-white p-6 rounded-lg`}>
              <Lightbulb className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Creative Problem Solver</h3>
              <p>From debugging complex circuits to optimizing algorithms, I thrive on turning challenges into elegant solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold ${palette.primaryText} mb-8 text-center`}>Quick Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Code className={`w-16 h-16 ${palette.secondaryText} mx-auto mb-4`} />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-600">Full-stack development with modern frameworks and languages</p>
            </div>
            <div className="text-center">
              <Zap className={`w-16 h-16 ${palette.accentText} mx-auto mb-4`} />
              <h3 className="text-xl font-semibold mb-2">Electrical Engineering</h3>
              <p className="text-gray-600">Circuit design, embedded systems, and hardware integration</p>
            </div>
            <div className="text-center">
              <Wrench className={`w-16 h-16 ${palette.highlightText} mx-auto mb-4`} />
              <h3 className="text-xl font-semibold mb-2">DIY & Innovation</h3>
              <p className="text-gray-600">3D printing, electronics projects, and creative solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const HobbiesPage = () => (
    <div className={`min-h-screen ${palette.light} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold ${palette.primaryText} mb-12 text-center`}>Hobbies & Passions</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Gamepad2, title: "Boxing", description: "Training discipline and physical fitness through the sweet science", color: palette.secondary },
            { icon: Cake, title: "Baking", description: "Precision in the kitchen, creating delicious treats from scratch", color: palette.accent },
            { icon: Building, title: "DIY Projects", description: "Building and fixing things with my hands, from furniture to electronics", color: palette.highlight },
            { icon: Coffee, title: "Cooking", description: "Exploring culinary techniques and international cuisines", color: palette.secondary },
            { icon: BookOpen, title: "Reading", description: "Continuous learning through books on tech, science, and fiction", color: palette.accent },
            { icon: Gamepad2, title: "Soccer", description: "Team sport strategy and staying active on the field", color: palette.highlight }
          ].map((hobby, index) => (
            <div key={index} className={`${hobby.color} ${palette.lightText} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}>
              <hobby.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{hobby.title}</h3>
              <p className="opacity-90">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className={`min-h-screen ${palette.light} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold ${palette.primaryText} mb-12 text-center`}>Projects & Skills</h1>
        
        <section className="mb-16">
          <h2 className={`text-2xl font-semibold ${palette.secondaryText} mb-8`}>Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Terminal className={`w-10 h-10 ${palette.secondaryText} mb-4`} />
              <h3 className="text-xl font-semibold mb-4">Software Engineering</h3>
              <div className="space-y-2">
                <span className={`inline-block ${palette.accent} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>JavaScript</span>
                <span className={`inline-block ${palette.secondary} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>Python</span>
                <span className={`inline-block ${palette.highlight} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>React</span>
                <span className={`inline-block ${palette.accent} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>Node.js</span>
                <span className={`inline-block ${palette.secondary} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>C++</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Cpu className={`w-10 h-10 ${palette.accentText} mb-4`} />
              <h3 className="text-xl font-semibold mb-4">Electrical Engineering</h3>
              <div className="space-y-2">
                <span className={`inline-block ${palette.secondary} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>PCB Design</span>
                <span className={`inline-block ${palette.accent} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>Microcontrollers</span>
                <span className={`inline-block ${palette.highlight} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>FPGA</span>
                <span className={`inline-block ${palette.secondary} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>Signal Processing</span>
                <span className={`inline-block ${palette.accent} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}>Circuit Analysis</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className={`text-2xl font-semibold ${palette.secondaryText} mb-8`}>Featured Projects</h2>
          <div className="space-y-6">
            {[
              {
                title: "Smart Home IoT System",
                description: "Integrated hardware and software solution for home automation using ESP32 microcontrollers and a React dashboard.",
                tech: ["React", "Node.js", "ESP32", "MQTT"],
                category: "Full Stack"
              },
              {
                title: "Real-time Audio Processing",
                description: "Digital signal processing application for live audio manipulation and effects using C++ and custom algorithms.",
                tech: ["C++", "DSP", "Real-time Processing"],
                category: "Embedded"
              },
              {
                title: "3D Printed Mechanical Keyboard",
                description: "Custom mechanical keyboard design with PCB layout, 3D printed case, and firmware programming.",
                tech: ["KiCad", "3D Printing", "QMK Firmware"],
                category: "Hardware"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`${palette.accent} text-white px-3 py-1 rounded-full text-sm`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={`${palette.secondary} text-white px-2 py-1 rounded text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const InterestsPage = () => (
    <div className={`min-h-screen ${palette.light} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold ${palette.primaryText} mb-12 text-center`}>Interests & Creative Pursuits</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              category: "Creative Arts",
              icon: Palette,
              interests: [
                { name: "Digital Painting", icon: PaintBucket },
                { name: "Sketching & Drawing", icon: Camera },
                { name: "3D Modeling", icon: Building }
              ]
            },
            {
              category: "Engineering & Tech",
              icon: Cpu,
              interests: [
                { name: "3D Printing", icon: Building },
                { name: "Electronics Projects", icon: Zap },
                { name: "Open Source Contribution", icon: Code }
              ]
            },
            {
              category: "Audio & Music",
              icon: Music,
              interests: [
                { name: "Music Production", icon: Headphones },
                { name: "Audio Engineering", icon: Music },
                { name: "Sound Design", icon: Wrench }
              ]
            },
            {
              category: "Learning & Growth",
              icon: BookOpen,
              interests: [
                { name: "Technical Literature", icon: FileText },
                { name: "Algorithm Design", icon: Calculator },
                { name: "Emerging Technologies", icon: Lightbulb }
              ]
            }
          ].map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <category.icon className={`w-8 h-8 ${palette.secondaryText} mr-3`} />
                <h2 className="text-xl font-semibold">{category.category}</h2>
              </div>
              <div className="space-y-4">
                {category.interests.map((interest, interestIndex) => (
                  <div key={interestIndex} className="flex items-center">
                    <interest.icon className={`w-5 h-5 ${palette.accentText} mr-3`} />
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ResourcesPage = () => (
    <div className={`min-h-screen ${palette.light} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold ${palette.primaryText} mb-12 text-center`}>Resources & References</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className={`text-2xl font-semibold ${palette.secondaryText} mb-6`}>Development Tools</h2>
            <div className="space-y-4">
              {[
                { name: "Visual Studio Code", description: "Primary IDE for development", url: "vscode" },
                { name: "KiCad", description: "Open source EDA suite for PCB design", url: "kicad" },
                { name: "Arduino IDE", description: "For microcontroller programming", url: "arduino" },
                { name: "Fusion 360", description: "3D CAD and CAM software", url: "fusion360" }
              ].map((tool, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{tool.name}</h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                  <ExternalLink className={`w-5 h-5 ${palette.accentText}`} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold ${palette.secondaryText} mb-6`}>Learning Resources</h2>
            <div className="space-y-4">
              {[
                { name: "MIT OpenCourseWare", description: "Free electrical engineering courses", category: "Education" },
                { name: "Stack Overflow", description: "Programming Q&A community", category: "Community" },
                { name: "IEEE Xplore", description: "Technical papers and research", category: "Research" },
                { name: "GitHub", description: "Code repositories and collaboration", category: "Platform" }
              ].map((resource, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{resource.name}</h3>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </div>
                    <span className={`${palette.accent} text-white px-2 py-1 rounded text-xs`}>
                      {resource.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12">
          <h2 className={`text-2xl font-semibold ${palette.secondaryText} mb-6`}>Useful Links</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Electronics Tutorials", type: "Learning" },
              { title: "Open Source Projects", type: "Code" },
              { title: "PCB Fabrication Services", type: "Manufacturing" },
              { title: "Component Suppliers", type: "Hardware" },
              { title: "Design Inspiration", type: "Creative" },
              { title: "Technical Documentation", type: "Reference" }
            ].map((link, index) => (
              <div key={index} className={`${palette.secondary} ${palette.lightText} p-4 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer`}>
                <h3 className="font-semibold">{link.title}</h3>
                <p className="text-sm opacity-90">{link.type}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  // Color palette switcher
  const PaletteSwitcher = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-3">
        <div className="flex space-x-2">
          {Object.keys(colorPalettes).map((paletteKey) => (
            <button
              key={paletteKey}
              onClick={() => setCurrentPalette(paletteKey)}
              className={`w-8 h-8 rounded-full border-2 ${
                currentPalette === paletteKey ? 'border-gray-800' : 'border-gray-300'
              }`}
              style={{
                background: paletteKey === 'ocean' 
                  ? 'linear-gradient(45deg, #0f172a, #0891b2, #22d3ee)' 
                  : paletteKey === 'sunset'
                  ? 'linear-gradient(45deg, #9a3412, #dc2626, #eab308)'
                  : 'linear-gradient(45deg, #14532d, #059669, #65a30d)'
              }}
              title={`Switch to ${paletteKey} palette`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'hobbies': return <HobbiesPage />;
      case 'projects': return <ProjectsPage />;
      case 'interests': return <InterestsPage />;
      case 'resources': return <ResourcesPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {renderCurrentPage()}
      <PaletteSwitcher />
    </div>
  );
}

export default App;