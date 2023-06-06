import bonanzaImg from "./assets/food/bonanza.jpg";
import classicMayoImg from "./assets/food/maio.jpg";
import cowboyImg from "./assets/food/cowboy.jpg";
import memphisImg from "./assets/food/memphis.jpg";
import { v4 as uuid } from "uuid";

export const YOUR_TOP_CHOICE = [
  {
    title: "Classic Mayo",
    id: uuid(),
    prices: [
      // ["L110gr", 4.9],
      // ["XL180gr", 5.3],
      ["L110gr", "XL180gr"],
      [4.9, 5.3],
    ],
    ingredients: ["Pickle SOS", "Διπλό τυρί", "Cheddar", "Μαρούλι", "Ντομάτα"],
    img: { src: classicMayoImg, alt: "Classic Mayo", width: 800, height: 450 },
  },
  {
    title: "Bonanza",
    id: uuid(),
    prices: [
      // ["L110gr", 5.8],
      // ["XL180gr", 6.2],

      ["L110gr", "XL180gr"],
      [5.8, 6.2],
    ],
    ingredients: [
      "ΒΒQ SOS",
      "Bacon",
      "Τυρί Cheddar",
      "Onion Ring",
      "Μαρούλι",
      "Ντομάτα",
    ],
    img: { src: bonanzaImg, alt: "Bonanza", width: 800, height: 450 },
  },
  {
    title: "Cowboy",
    id: uuid(),
    prices: [
      // ["L110gr", 5.6],
      // ["XL180gr", 6.1],

      ["L110gr", "XL180gr"],
      [5.6, 6.1],
    ],
    ingredients: [
      "BBQ SOS",
      "Πανέ Κοτόπουλο",
      "Bacon",
      "Τυρί Cheddar",
      "Ντομάτα",
      "Onion Rings",
      "Μαρούλι",
      "Ντομάτα",
    ],
    img: { src: cowboyImg, alt: "Cowboy", width: 800, height: 450 },
  },
  {
    title: "Memphis",
    id: uuid(),
    prices: [
      // ["L110gr", 5.8],
      // ["XL180gr", 6.2],

      ["L110gr", "XL180gr"],
      [5.8, 6.2],
    ],
    ingredients: [
      "Pepper jam sauce",
      "bacon",
      "τυρί emmental",
      "καραμελωμένα κρεμμύδια",
      "μαρούλι",
      "ντομάτα",
    ],
    img: { src: memphisImg, alt: "Memphis", width: 800, height: 450 },
  },
];
