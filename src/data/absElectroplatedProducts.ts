import absComponents from "@/assets/products/abs-electroplated/abs-components.jpg";

export interface AbsElectroplatedProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const absElectroplatedProducts: AbsElectroplatedProduct[] = [
  {
    id: "abs-components",
    name: "ABS Electroplated Components",
    description: "Premium chrome-plated ABS components including handles, trims, and decorative accents.",
    image: absComponents,
  },
];
