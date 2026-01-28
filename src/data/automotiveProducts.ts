import bicycleParts from "@/assets/products/automotive/bicycle-parts.jpg";
import armrestHandle from "@/assets/products/automotive/armrest-handle.jpg";
import motorcycleIndicator from "@/assets/products/automotive/motorcycle-indicator.jpg";
import motorcycleFender from "@/assets/products/automotive/motorcycle-fender.jpg";

export interface AutomotiveProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const automotiveProducts: AutomotiveProduct[] = [
  {
    id: "bicycle-parts",
    name: "Bicycle Parts",
    description: "Custom molded decorative plastic parts for bicycles with graphic overlays.",
    image: bicycleParts,
  },
  {
    id: "armrest-handle",
    name: "Armrest Handle",
    description: "Ergonomic armrest handle for automobile interiors with textured grip surface.",
    image: armrestHandle,
  },
  {
    id: "motorcycle-indicator",
    name: "Motorcycle Indicator Light",
    description: "LED-compatible indicator light housing for motorcycles and two-wheelers.",
    image: motorcycleIndicator,
  },
  {
    id: "motorcycle-fender",
    name: "Motorcycle Fender",
    description: "Impact-resistant front fender for motorcycles with aerodynamic design.",
    image: motorcycleFender,
  },
];
