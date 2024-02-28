import yaris from "../Assets/cars/yaris.jpg";
import puma from "../Assets/cars/puma.jpg";
import tesla from "../Assets/cars/tesla-y.webp";
import peugeot from "../Assets/cars/peugeot.jpg";

export const cars = [
  {
    name: "Tesla Model Y",
    image: tesla,
    description: "Description for model Y",
    characteristics: ["Electrique", "Automatique", "5 places"],
    category: "Berline",
  },
  {
    name: "Peugeot 108",
    image: peugeot,
    description: "Description for Peugeot 108",
    characteristics: ["Essence", "Manuelle", "5 places"],
    category: "Citadine",
  },
  {
    name: "Ford puma",
    image: puma,
    description: "Description for Ford puma",
    characteristics: ["Essence / E80", "Automatique", "5 places"],
    category: "SUV",
  },
  {
    name: "Toyota yaris",
    image: yaris,
    description: "Description for Toyota yaris",
    characteristics: ["Essence", "Manuelle", "5 places"],
    category: "Citadine",
  },
];
