"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_react_swc_1 = require("@vitejs/plugin-react-swc");
// import tailwindcss from "tailwindcss";
var vite_1 = require("@tailwindcss/vite");
// import svgr from 'vite-plugin-svgr';
// import path from "path";
var vite_2 = require("vite");
exports.default = (0, vite_2.defineConfig)({
    plugins: [
        (0, plugin_react_swc_1.default)(),
        (0, vite_1.default)()
    ],
    // css: {
    //   postcss: {
    //     plugins: [tailwindcss()],
    //   },
    // }
});
