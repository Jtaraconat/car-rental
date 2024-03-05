import chr from "../Assets/cars/ch-r.png";
import tesla from "../Assets/cars/tesla-y.png";
import prius from "../Assets/cars/prius.png";
import peugeot208 from "../Assets/cars/208.png";
import aygo from "../Assets/cars/aygo.png";

export const cars = [
  {
    name: "Tesla Model Y",
    type: "Vehicule",
    image: tesla,
    description: "Description for model Y",
    passenger: 5,
    engine: "Electrique",
    gearbox: "Manuelle",
    category: "Berline",
    price: 70,
  },
  {
    name: "Toyota Prius",
    type: "Vehicule",
    image: prius,
    description: "Description for Toyota Prius",
    passenger: 5,
    engine: "Hybride",
    gearbox: "Manuelle",
    category: "Citadine",
    price: 20,
  },
  {
    name: "Toyota Ch-R",
    type: "Vehicule",
    image: chr,
    description: "Description for Toyota Ch-R",
    passenger: 5,
    engine: "Electrique",
    gearbox: "automatique",
    category: "SUV",
    price: 50,
  },
  {
    name: "Toyota Aygo",
    type: "Vehicule",
    image: aygo,
    description: "Description for Toyota Aygo",
    passenger: 5,
    engine: "Essence",
    gearbox: "Manuelle",
    category: "Citadine",
    price: 20,
  },
  {
    name: "Peugeot 208",
    type: "Vehicule",
    image: peugeot208,
    description: "Description for Toyota Aygo",
    passenger: 5,
    engine: "Essence",
    gearbox: "Manuelle",
    category: "Citadine",
    price: 20,
  },
];
