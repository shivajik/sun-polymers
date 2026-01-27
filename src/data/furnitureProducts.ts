import twoWayCornerWhite from "@/assets/products/furniture/2-way-corner-white.jpg";
import threeWayCornerColors from "@/assets/products/furniture/3-way-corner-colors.jpg";
import threeWayCornerWhite from "@/assets/products/furniture/3-way-corner-white.jpg";
import fourWayConnector from "@/assets/products/furniture/4-way-connector.jpg";
import angleBracket from "@/assets/products/furniture/angle-bracket.jpg";
import cornerBracket1 from "@/assets/products/furniture/corner-bracket-1.jpg";
import cornerBracket2 from "@/assets/products/furniture/corner-bracket-2.jpg";
import lBracket from "@/assets/products/furniture/l-bracket.jpg";
import bedClip from "@/assets/products/furniture/bed-clip.jpg";
import tConnector from "@/assets/products/furniture/t-connector.jpg";

export interface FurnitureProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const furnitureProducts: FurnitureProduct[] = [
  {
    id: "2-way-corner-white",
    name: "2-Way Corner Connector (White)",
    description: "L-shaped corner connector for aluminum tube furniture assembly",
    image: twoWayCornerWhite,
  },
  {
    id: "3-way-corner-colors",
    name: "3-Way Corner Connector (Multi-Color)",
    description: "Available in wood brown, black, white, and cream finishes",
    image: threeWayCornerColors,
  },
  {
    id: "3-way-corner-white",
    name: "3-Way Corner Connector (White)",
    description: "Three-way corner joint for modular furniture frames",
    image: threeWayCornerWhite,
  },
  {
    id: "4-way-connector",
    name: "4-Way Cross Connector",
    description: "Cross-shaped connector available in white, black, and brown",
    image: fourWayConnector,
  },
  {
    id: "angle-bracket",
    name: "90° Angle Bracket",
    description: "Reinforced angle bracket for corner joints and supports",
    image: angleBracket,
  },
  {
    id: "corner-bracket-1",
    name: "Corner Bracket Type A",
    description: "Heavy-duty corner bracket for furniture frame assembly",
    image: cornerBracket1,
  },
  {
    id: "corner-bracket-2",
    name: "Corner Bracket Type B",
    description: "Reinforced corner bracket with cross-bracing design",
    image: cornerBracket2,
  },
  {
    id: "l-bracket",
    name: "L-Bracket Set",
    description: "Multi-purpose L-brackets for various furniture applications",
    image: lBracket,
  },
  {
    id: "bed-clip",
    name: "Bed Slat Clip",
    description: "Secure clip for holding bed slats in position",
    image: bedClip,
  },
  {
    id: "t-connector",
    name: "T-Connector",
    description: "T-shaped connector for mid-frame furniture joints",
    image: tConnector,
  },
];
