export const kms = [
  {
    id: 0,
    title: "Forfait kilométrique 200 kms",
    price: 0,
    characteristics: {
      a: "Conduisez jusqu'à 200 kms durant la location",
      b: "0.40€ par km supplémentaire ",
    },
  },

  {
    id: 1,
    title: "Forfait kilométrique 500 kms",
    price: 15,
    characteristics: {
      a: "Conduisez jusqu'à 500 kms durant la location",
      b: "0.38€ par km supplémentaire ",
    },
  },
  {
    id: 2,
    title: "Forfait kilométrique 1000 kms",
    price: 30,
    characteristics: {
      a: "Conduisez jusqu'à 1000 kms durant la location",
      b: "0.34€ par km supplémentaire ",
    },
  },
];

export const protections = [
  {
    id: 0,
    title: "Aucune protection",
    price: 0,
    franchise: "Franchise jusqu'à la valeur du véhicule",
    characteristics: {
      a: "Assurance dommages pour tous les dommages par collision, chocs, vol ou rayures",
      b: "Protection pneus et bris de glace",
    },
  },
  {
    id: 1,
    title: "Assurance basic",
    price: 10,
    franchise: "Franchise: jusqu'à 2 500€",
    characteristics: {
      a: "Assurance dommages pour tous les dommages par collision, chocs, vol ou rayures",
      b: "Protection pneus et bris de glace",
    },
  },
  {
    id: 2,
    title: "Assurance Semi-Premium",
    price: 30,
    franchise: "Franchise: jusqu'à 1 500€",
    characteristics: {
      a: "Assurance dommages pour tous les dommages par collision, chocs, vol ou rayures",
      b: "Protection pneus et bris de glace",
    },
  },
  {
    id: 3,
    title: "Assurance Premium",
    price: 35,
    franchise: "Aucune franchise",
    characteristics: {
      a: "Assurance dommages pour tous les dommages par collision, chocs, vol ou rayures",
      b: "Protection pneus et bris de glace",
    },
  },
];
