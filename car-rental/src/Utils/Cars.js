import p5008 from "../Assets/cars/5008.png";
import tesla from "../Assets/cars/tesla-y.png";
import corolla from "../Assets/cars/corolla.png";
import peugeot208 from "../Assets/cars/208.png";
import f500 from "../Assets/cars/fiat500.png";

export const cars = [
  {
    id: 1,
    name: "Tesla Model Y",
    type: "Vehicule",
    image: tesla,
    description: "Description for model Y",
    passenger: 5,
    engine: "Electrique",
    gearbox: "Automatique",
    category: "Berline",
    price: 70,
  },
  {
    id: 2,
    name: "Toyota Corolla",
    type: "Vehicule",
    image: corolla,
    description: "Description for Toyota Prius",
    passenger: 5,
    engine: "Hybride",
    gearbox: "Automatique",
    category: "Citadine",
    price: 20,
  },
  {
    id: 3,
    name: "Peugeot 5008",
    type: "Vehicule",
    image: p5008,
    description: "Description for Peugeot 5008",
    passenger: 5,
    engine: "Essence",
    gearbox: "Automatique",
    category: "SUV",
    price: 50,
  },
  {
    id: 4,
    name: "Fiat 500",
    type: "Vehicule",
    image: f500,
    description: "Description for Fiat 500",
    passenger: 4,
    engine: "Essence",
    gearbox: "Manuelle",
    category: "Citadine",
    price: 20,
  },
  {
    id: 5,
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
