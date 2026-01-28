import waterController from "@/assets/products/other/water-controller.jpg";
import industrialHousing from "@/assets/products/other/industrial-housing.jpg";
import precisionRing from "@/assets/products/other/precision-ring.jpg";
import variousComponents from "@/assets/products/other/various-components.jpg";

export interface OtherProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const otherProducts: OtherProduct[] = [
  {
    id: "water-controller",
    name: "Automatic Water Controller",
    description: "Automated water level controller housing with integrated pump mechanism.",
    image: waterController,
  },
  {
    id: "industrial-housing",
    name: "Industrial Equipment Housing",
    description: "Rugged industrial enclosure for electronic equipment and control systems.",
    image: industrialHousing,
  },
  {
    id: "precision-ring",
    name: "Precision Mounting Ring",
    description: "Blue anodized precision ring component for industrial machinery applications.",
    image: precisionRing,
  },
  {
    id: "various-components",
    name: "Custom Plastic Components",
    description: "Assorted custom plastic parts including gears, brackets, and specialty components.",
    image: variousComponents,
  },
];
