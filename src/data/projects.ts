import prsImage from "../assets/PRS.png";
import reactDjangoBPImage from "../assets/reactDjangoBP.png";
import turingMachineImage from "../assets/turingMachine.jpg";
import imageResizerImage from "../assets/imageResizer.png";
import gLangImage from "../assets/GLang.png";

export const projects = [
  {
    name: "React/Django Full Stack Boilerplate (WIP)",
    tags: [
      "React.js",
      "Django REST Framework",
      "Redux",
      "RTKQuery",
      "Bootstrap 5",
      "Docker",
    ],
    image: reactDjangoBPImage,
    summary:
      "A boilerplate project built on React.js and Django using Redux Toolkit and RTKQuery for state/cache management and Django REST Framework on the backend with a MariaDB database. Currently implements JWT authentication strategy and provides a custom user model for modification.<p class='my-1'> <span class='font-semibold'>In Progress:</span> frontend user management views.</p> <p class='my-1'><span class='font-semibold'>Coverage:</span> 84%</p>",
    link: "https://github.com/ARG-JR/React-DRF-Boilerplate/tree/dev",
  },
  {
    name: "Page Replacement Algorithm Simulator",
    tags: ["JQuery", "Materialize.css", "HTML5", "CPU"],
    image: prsImage,
    summary:
      "Simulates various page replacement algorithms with the ability to step through the algorithms one page at a time. Written with JQuery and materialize.css for a class project.",
    link: "https://replit.com/@JordanRenaud/PRSProject2#index.html",
  },
  {
    name: "Turing Machine Simulator",
    tags: ["Java", "Turing Machines", "5-Tuples"],
    image: turingMachineImage,
    summary:
      "A Java program that simulates turing machines given a set of 5-tuples, an initial tape, and a max-iterations number.",
    link: "https://replit.com/@JordanRenaud/Turing-Machine-Simulator",
  },
  {
    name: "Image Resizer",
    tags: ["Python", "Flask", "PILLOW"],
    image: imageResizerImage,
    summary:
      "A Flask app that when provided with an image and an aspect ratio configuration, will spit out a zip file containing resized copies of the image at 72 DPI for mobile and desktop breakpoints, then delete the files on the server to conserve space. This app was heavily used during my time with Southeast Missouri State University's Marketing Department while we were migrating content from the old university website to the current website.",
    link: "https://replit.com/@JordanRenaud/Turing-Machine-Simulator",
  },
  {
    name: "GLang Programming Language",
    tags: ["Java", "JACC"],
    image: gLangImage,
    summary:
      "A homemade programming language made for a class. Object oriented, supports functions, classes, class methods, arrays, binary operations, order of operations, and a few built-in functions. Parser built with JACC, using a BNF-like syntax for grammar definition. Interprets code.",
    link: "https://github.com/jtrenaud1s/GLang",
  },
];
