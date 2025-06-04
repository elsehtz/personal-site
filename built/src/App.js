"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./App.css");
var lucide_react_1 = require("lucide-react");
// Color palette system - easy to switch between different combinations
var colorPalettes = {
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
    var _a = (0, react_1.useState)('home'), currentPage = _a[0], setCurrentPage = _a[1];
    var _b = (0, react_1.useState)('ocean'), currentPalette = _b[0], setCurrentPalette = _b[1];
    var palette = colorPalettes[currentPalette];
    var Navigation = function () { return ((0, jsx_runtime_1.jsx)("nav", { className: "".concat(palette.primary, " ").concat(palette.lightText, " p-4 shadow-lg"), children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto flex justify-between items-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold", children: "Zak ElSeht" }), (0, jsx_runtime_1.jsx)("div", { className: "flex space-x-6", children: ['home', 'hobbies', 'projects', 'interests', 'resources'].map(function (page) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setCurrentPage(page); }, className: "capitalize transition-colors duration-200 ".concat(currentPage === page
                            ? "".concat(palette.accentText, " border-b-2 border-current")
                            : "hover:".concat(palette.highlightText)), children: page }, page)); }) })] }) })); };
    var HomePage = function () { return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen ".concat(palette.light), children: [(0, jsx_runtime_1.jsx)("section", { className: "".concat(palette.primary, " ").concat(palette.lightText, " py-20"), children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto px-4 text-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-bold mb-4", children: "Electrical & Software Engineer" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl mb-8 opacity-90", children: "Building the future through code and circuits" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center space-x-4", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Mail, { className: "w-6 h-6 ".concat(palette.highlightText) }), (0, jsx_runtime_1.jsx)(lucide_react_1.Github, { className: "w-6 h-6 ".concat(palette.highlightText) }), (0, jsx_runtime_1.jsx)(lucide_react_1.Linkedin, { className: "w-6 h-6 ".concat(palette.highlightText) })] })] }) }), (0, jsx_runtime_1.jsx)("section", { className: "py-16 px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold ".concat(palette.primaryText, " mb-8 text-center"), children: "About Me" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "".concat(palette.secondary, " ").concat(palette.lightText, " p-6 rounded-lg"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Cpu, { className: "w-12 h-12 mb-4" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-2", children: "Technical Expertise" }), (0, jsx_runtime_1.jsx)("p", { children: "Passionate about bridging hardware and software, creating innovative solutions that combine electrical engineering principles with cutting-edge programming." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "".concat(palette.accent, " text-white p-6 rounded-lg"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Lightbulb, { className: "w-12 h-12 mb-4" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-2", children: "Creative Problem Solver" }), (0, jsx_runtime_1.jsx)("p", { children: "From debugging complex circuits to optimizing algorithms, I thrive on turning challenges into elegant solutions." })] })] })] }) }), (0, jsx_runtime_1.jsx)("section", { className: "py-16 px-4 bg-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold ".concat(palette.primaryText, " mb-8 text-center"), children: "Quick Overview" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-3 gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Code, { className: "w-16 h-16 ".concat(palette.secondaryText, " mx-auto mb-4") }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-2", children: "Software Development" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: "Full-stack development with modern frameworks and languages" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Zap, { className: "w-16 h-16 ".concat(palette.accentText, " mx-auto mb-4") }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-2", children: "Electrical Engineering" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: "Circuit design, embedded systems, and hardware integration" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Wrench, { className: "w-16 h-16 ".concat(palette.highlightText, " mx-auto mb-4") }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-2", children: "DIY & Innovation" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: "3D printing, electronics projects, and creative solutions" })] })] })] }) })] })); };
    var HobbiesPage = function () { return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen ".concat(palette.light, " py-16 px-4"), children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold ".concat(palette.primaryText, " mb-12 text-center"), children: "Hobbies & Passions" }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
                        { icon: lucide_react_1.Gamepad2, title: "Boxing", description: "Training discipline and physical fitness through the sweet science", color: palette.secondary },
                        { icon: lucide_react_1.Cake, title: "Baking", description: "Precision in the kitchen, creating delicious treats from scratch", color: palette.accent },
                        { icon: lucide_react_1.Building, title: "DIY Projects", description: "Building and fixing things with my hands, from furniture to electronics", color: palette.highlight },
                        { icon: lucide_react_1.Coffee, title: "Cooking", description: "Exploring culinary techniques and international cuisines", color: palette.secondary },
                        { icon: lucide_react_1.BookOpen, title: "Reading", description: "Continuous learning through books on tech, science, and fiction", color: palette.accent },
                        { icon: lucide_react_1.Gamepad2, title: "Soccer", description: "Team sport strategy and staying active on the field", color: palette.highlight }
                    ].map(function (hobby, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "".concat(hobby.color, " ").concat(palette.lightText, " p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"), children: [(0, jsx_runtime_1.jsx)(hobby.icon, { className: "w-12 h-12 mb-4" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-3", children: hobby.title }), (0, jsx_runtime_1.jsx)("p", { className: "opacity-90", children: hobby.description })] }, index)); }) })] }) })); };
    var ProjectsPage = function () { return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen ".concat(palette.light, " py-16 px-4"), children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold ".concat(palette.primaryText, " mb-12 text-center"), children: "Projects & Skills" }), (0, jsx_runtime_1.jsxs)("section", { className: "mb-16", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold ".concat(palette.secondaryText, " mb-8"), children: "Technical Skills" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Terminal, { className: "w-10 h-10 ".concat(palette.secondaryText, " mb-4") }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-4", children: "Software Engineering" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.accent, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "JavaScript" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.secondary, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "Python" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.highlight, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "React" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.accent, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "Node.js" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.secondary, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "C++" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Cpu, { className: "w-10 h-10 ".concat(palette.accentText, " mb-4") }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-4", children: "Electrical Engineering" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.secondary, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "PCB Design" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.accent, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "Microcontrollers" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.highlight, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "FPGA" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.secondary, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "Signal Processing" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ".concat(palette.accent, " text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"), children: "Circuit Analysis" })] })] })] })] }), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold ".concat(palette.secondaryText, " mb-8"), children: "Featured Projects" }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: [
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
                            ].map(function (project, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-start mb-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold", children: project.title }), (0, jsx_runtime_1.jsx)("span", { className: "".concat(palette.accent, " text-white px-3 py-1 rounded-full text-sm"), children: project.category })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 mb-4", children: project.description }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap gap-2", children: project.tech.map(function (tech, techIndex) { return ((0, jsx_runtime_1.jsx)("span", { className: "".concat(palette.secondary, " text-white px-2 py-1 rounded text-sm"), children: tech }, techIndex)); }) })] }, index)); }) })] })] }) })); };
    var InterestsPage = function () { return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen ".concat(palette.light, " py-16 px-4"), children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold ".concat(palette.primaryText, " mb-12 text-center"), children: "Interests & Creative Pursuits" }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-2 gap-8", children: [
                        {
                            category: "Creative Arts",
                            icon: lucide_react_1.Palette,
                            interests: [
                                { name: "Digital Painting", icon: lucide_react_1.PaintBucket },
                                { name: "Sketching & Drawing", icon: lucide_react_1.Camera },
                                { name: "3D Modeling", icon: lucide_react_1.Building }
                            ]
                        },
                        {
                            category: "Engineering & Tech",
                            icon: lucide_react_1.Cpu,
                            interests: [
                                { name: "3D Printing", icon: lucide_react_1.Building },
                                { name: "Electronics Projects", icon: lucide_react_1.Zap },
                                { name: "Open Source Contribution", icon: lucide_react_1.Code }
                            ]
                        },
                        {
                            category: "Audio & Music",
                            icon: lucide_react_1.Music,
                            interests: [
                                { name: "Music Production", icon: lucide_react_1.Headphones },
                                { name: "Audio Engineering", icon: lucide_react_1.Music },
                                { name: "Sound Design", icon: lucide_react_1.Wrench }
                            ]
                        },
                        {
                            category: "Learning & Growth",
                            icon: lucide_react_1.BookOpen,
                            interests: [
                                { name: "Technical Literature", icon: lucide_react_1.FileText },
                                { name: "Algorithm Design", icon: lucide_react_1.Calculator },
                                { name: "Emerging Technologies", icon: lucide_react_1.Lightbulb }
                            ]
                        }
                    ].map(function (category, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center mb-6", children: [(0, jsx_runtime_1.jsx)(category.icon, { className: "w-8 h-8 ".concat(palette.secondaryText, " mr-3") }), (0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-semibold", children: category.category })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: category.interests.map(function (interest, interestIndex) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(interest.icon, { className: "w-5 h-5 ".concat(palette.accentText, " mr-3") }), (0, jsx_runtime_1.jsx)("span", { children: interest.name })] }, interestIndex)); }) })] }, index)); }) })] }) })); };
    var ResourcesPage = function () { return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen ".concat(palette.light, " py-16 px-4"), children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold ".concat(palette.primaryText, " mb-12 text-center"), children: "Resources & References" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-8", children: [(0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold ".concat(palette.secondaryText, " mb-6"), children: "Development Tools" }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: [
                                        { name: "Visual Studio Code", description: "Primary IDE for development", url: "vscode" },
                                        { name: "KiCad", description: "Open source EDA suite for PCB design", url: "kicad" },
                                        { name: "Arduino IDE", description: "For microcontroller programming", url: "arduino" },
                                        { name: "Fusion 360", description: "3D CAD and CAM software", url: "fusion360" }
                                    ].map(function (tool, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-4 rounded-lg shadow-sm flex justify-between items-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "font-semibold", children: tool.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-sm", children: tool.description })] }), (0, jsx_runtime_1.jsx)(lucide_react_1.ExternalLink, { className: "w-5 h-5 ".concat(palette.accentText) })] }, index)); }) })] }), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold ".concat(palette.secondaryText, " mb-6"), children: "Learning Resources" }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: [
                                        { name: "MIT OpenCourseWare", description: "Free electrical engineering courses", category: "Education" },
                                        { name: "Stack Overflow", description: "Programming Q&A community", category: "Community" },
                                        { name: "IEEE Xplore", description: "Technical papers and research", category: "Research" },
                                        { name: "GitHub", description: "Code repositories and collaboration", category: "Platform" }
                                    ].map(function (resource, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "bg-white p-4 rounded-lg shadow-sm", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-start", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "font-semibold", children: resource.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-sm", children: resource.description })] }), (0, jsx_runtime_1.jsx)("span", { className: "".concat(palette.accent, " text-white px-2 py-1 rounded text-xs"), children: resource.category })] }) }, index)); }) })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "mt-12", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold ".concat(palette.secondaryText, " mb-6"), children: "Useful Links" }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-3 gap-4", children: [
                                { title: "Electronics Tutorials", type: "Learning" },
                                { title: "Open Source Projects", type: "Code" },
                                { title: "PCB Fabrication Services", type: "Manufacturing" },
                                { title: "Component Suppliers", type: "Hardware" },
                                { title: "Design Inspiration", type: "Creative" },
                                { title: "Technical Documentation", type: "Reference" }
                            ].map(function (link, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "".concat(palette.secondary, " ").concat(palette.lightText, " p-4 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"), children: [(0, jsx_runtime_1.jsx)("h3", { className: "font-semibold", children: link.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm opacity-90", children: link.type })] }, index)); }) })] })] }) })); };
    // Color palette switcher
    var PaletteSwitcher = function () { return ((0, jsx_runtime_1.jsx)("div", { className: "fixed bottom-4 right-4 z-50", children: (0, jsx_runtime_1.jsx)("div", { className: "bg-white rounded-lg shadow-lg p-3", children: (0, jsx_runtime_1.jsx)("div", { className: "flex space-x-2", children: Object.keys(colorPalettes).map(function (paletteKey) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setCurrentPalette(paletteKey); }, className: "w-8 h-8 rounded-full border-2 ".concat(currentPalette === paletteKey ? 'border-gray-800' : 'border-gray-300'), style: {
                        background: paletteKey === 'ocean'
                            ? 'linear-gradient(45deg, #0f172a, #0891b2, #22d3ee)'
                            : paletteKey === 'sunset'
                                ? 'linear-gradient(45deg, #9a3412, #dc2626, #eab308)'
                                : 'linear-gradient(45deg, #14532d, #059669, #65a30d)'
                    }, title: "Switch to ".concat(paletteKey, " palette") }, paletteKey)); }) }) }) })); };
    var renderCurrentPage = function () {
        switch (currentPage) {
            case 'home': return (0, jsx_runtime_1.jsx)(HomePage, {});
            case 'hobbies': return (0, jsx_runtime_1.jsx)(HobbiesPage, {});
            case 'projects': return (0, jsx_runtime_1.jsx)(ProjectsPage, {});
            case 'interests': return (0, jsx_runtime_1.jsx)(InterestsPage, {});
            case 'resources': return (0, jsx_runtime_1.jsx)(ResourcesPage, {});
            default: return (0, jsx_runtime_1.jsx)(HomePage, {});
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen", children: [(0, jsx_runtime_1.jsx)(Navigation, {}), renderCurrentPage(), (0, jsx_runtime_1.jsx)(PaletteSwitcher, {})] }));
}
exports.default = App;
