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

export const optionsData = [
  {
    id: 0,
    title: "Conducteur supplémentaire",
    price: 12,
    priceInfos: "jour",
    description:
      "Partagez le volant avec un conducteur supplémentaire. Vous avez la possibilité d'ajouter un seul conducteur supplémentaire.",
  },
  {
    id: 1,
    title: "Sangle",
    price: 6,
    priceInfos: "jeu de sangles",
    description:
      "Nous vous fournissons des sangles pour sécuriser votre chargement.",
  },
  {
    id: 2,
    title: "Diable",
    price: 17,
    priceInfos: "jour",
    description:
      "Nous vous fournissons 2 diables pour vous aider à charger votre location.",
  },
  {
    id: 3,
    title: "Protection intérieure",
    price: 8,
    priceInfos: "jour",
    description:
      "Vous ne serez pas tenu responsable en cas de dommages à l'intérieur du véhicule.",
  },

  {
    id: 4,
    title: "Système de navigation",
    price: 20,
    priceInfos: "jour",
    description:
      "Profitez d'un guidage mains libres et roulez en toute sécurité.",
  },
  {
    id: 5,
    title: "Couverture à l'étranger",
    price: 18,
    priceInfos: "une fois",
    description:
      "Conduisez votre véhicule en dehors des frontières françaises.",
  },
  {
    id: 6,
    title: "Chaînes neige / Chaussettes",
    price: 14,
    priceInfos: "jour",
    description: "Roulez en toute sécurité sur la neige et la glace.",
  },
  {
    id: 7,
    title: "Protection pneux et vitres",
    price: 5,
    priceInfos: "jour",
    description:
      "Vous ne serez pas tenu responsable en cas de vitres ou pneus endommagés.",
  },
  {
    id: 8,
    title: "Ravitaillement / Recharge",
    price: 25,
    priceInfos: "une fois",
    description:
      "Vous êtes pressé? Nous nous occupons de faire le plein ou de recharger votre véhicule de location à son retour. Le carburant ou l'electricité vous est facturé au prix actuel.",
  },
];
