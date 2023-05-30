import { devportfolio, pizzeriavesuvio } from "../assets";

const projects = [
  {
    name: "Pizzeria Vesuvio CRUD",
    image: pizzeriavesuvio,
    stack: [".NET", "ASP.MVC", "SQLserver"],
    source: "https://github.com/AlessioRoman/la-mia-pizzeria-crud-webapi",
  },
  {
    name: "Personal Portfolio",
    image: devportfolio,
    stack: ["React", "Three.js", "Tailwind"],
    source: "https://github.com/AlessioRoman/Personal-portfolio",
  },
];

export default projects;
