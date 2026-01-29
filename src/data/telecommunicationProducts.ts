import mobileCovers from "@/assets/products/telecommunication/mobile-covers.jpg";
import telecomProducts from "@/assets/products/telecommunication/telecom-products.jpg";
import telephoneComponents from "@/assets/products/telecommunication/telephone-components.jpg";

export interface TelecomProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const telecommunicationProducts: TelecomProduct[] = [
  {
    id: "mobile-covers",
    name: "Mobile Phone Covers",
    description: "Precision molded mobile phone front panels and covers in various finishes.",
    image: mobileCovers,
  },
  {
    id: "telecom-products",
    name: "Telecommunication Products",
    description: "Complete range of telecommunication device housings and components.",
    image: telecomProducts,
  },
  {
    id: "telephone-components",
    name: "Telephone Components",
    description: "Cordless phone base stations and handset housings with integrated keypads.",
    image: telephoneComponents,
  },
];
