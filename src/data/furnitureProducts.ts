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
import cornerJointBlack from "@/assets/products/furniture/corner-joint-black.jpg";
import lJointBracket from "@/assets/products/furniture/l-joint-bracket.jpg";
import cornerPlate from "@/assets/products/furniture/corner-plate.jpg";
import channelClip from "@/assets/products/furniture/channel-clip.jpg";
import pivotBracket from "@/assets/products/furniture/pivot-bracket.jpg";
import endCapRectangular from "@/assets/products/furniture/end-cap-rectangular.jpg";
import tubeSleeve from "@/assets/products/furniture/tube-sleeve.jpg";
import handleGrip from "@/assets/products/furniture/handle-grip.jpg";
import roundEndCap from "@/assets/products/furniture/round-end-cap.jpg";
import drawerHandle from "@/assets/products/furniture/drawer-handle.jpg";
import squareEndCapBlack from "@/assets/products/furniture/square-end-cap-black.jpg";
import connectorSetWhite from "@/assets/products/furniture/connector-set-white.jpg";
import connectorSetBlack from "@/assets/products/furniture/connector-set-black.jpg";
import furnitureSpacers from "@/assets/products/furniture/furniture-spacers.jpeg";

export interface FurnitureProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const furnitureProducts: FurnitureProduct[] = [
  {
    id: "2-way-corner-white",
    name: "2 Way Plastic Corner",
    description: "L-shaped corner connector for aluminum tube furniture assembly",
    image: twoWayCornerWhite,
  },
  {
    id: "3-way-corner-colors",
    name: "3 Way Plastic Corner",
    description: "Available in wood brown, black, white, and cream finishes",
    image: threeWayCornerColors,
  },
  {
    id: "3-way-corner-white",
    name: "3 Way Plastic Corner Square",
    description: "Three-way corner joint for modular furniture frames",
    image: threeWayCornerWhite,
  },
  {
    id: "4-way-connector",
    name: "4 Way Plastic Corner",
    description: "Cross-shaped connector available in white, black, and brown",
    image: fourWayConnector,
  },
  {
    id: "angle-bracket",
    name: "Plastic Angle",
    description: "Reinforced angle bracket for corner joints and supports",
    image: angleBracket,
  },
  {
    id: "corner-bracket-1",
    name: "Plastic Angle 135-2 Way",
    description: "Heavy-duty corner bracket for furniture frame assembly",
    image: cornerBracket1,
  },
  {
    id: "corner-bracket-2",
    name: "Plastic Corner 90 Degree Big",
    description: "Reinforced corner bracket with cross-bracing design",
    image: cornerBracket2,
  },
  {
    id: "l-bracket",
    name: "Plastic Corner 90 Degree Small",
    description: "Multi-purpose L-brackets for various furniture applications",
    image: lBracket,
  },
  {
    id: "bed-clip",
    name: "Double Shutter",
    description: "Secure clip for holding bed slats in position",
    image: bedClip,
  },
  {
    id: "t-connector",
    name: "2 Way Plastic Corner Square",
    description: "T-shaped connector for mid-frame furniture joints",
    image: tConnector,
  },
  {
    id: "corner-joint-black",
    name: "Corner Cap 10 CM",
    description: "Heavy-duty black corner joint for robust furniture frames",
    image: cornerJointBlack,
  },
  {
    id: "l-joint-bracket",
    name: "Corner Cap 8 CM",
    description: "Angled L-joint bracket with pin connector for secure assembly",
    image: lJointBracket,
  },
  {
    id: "corner-plate",
    name: "Fly Nut Corner Without Steel",
    description: "Reinforced corner plate with diagonal ribbing for extra strength",
    image: cornerPlate,
  },
  {
    id: "channel-clip",
    name: "Fly Nut Corner With Steel",
    description: "Snap-fit channel clip for panel and board mounting",
    image: channelClip,
  },
  {
    id: "pivot-bracket",
    name: "Handle",
    description: "Rotating pivot bracket for adjustable furniture components",
    image: pivotBracket,
  },
  {
    id: "end-cap-rectangular",
    name: "Shutter Cap Square",
    description: "Protective end cap for rectangular tube profiles",
    image: endCapRectangular,
  },
  {
    id: "tube-sleeve",
    name: "Shutter Cap Round",
    description: "Protective sleeve for round tube connections",
    image: tubeSleeve,
  },
  {
    id: "handle-grip",
    name: "Water Cap Square",
    description: "Ergonomic handle grip for drawers and cabinet doors",
    image: handleGrip,
  },
  {
    id: "round-end-cap",
    name: "Water Cap Round",
    description: "Ribbed end cap for round tube furniture legs",
    image: roundEndCap,
  },
  {
    id: "drawer-handle",
    name: "Water Cap Special",
    description: "Sleek drawer handle for modern furniture applications",
    image: drawerHandle,
  },
  {
    id: "square-end-cap-black",
    name: "Water Cap Long",
    description: "Heavy-duty square end cap for rectangular tube profiles",
    image: squareEndCapBlack,
  },
  {
    id: "connector-set-white",
    name: "Water Cap With Tube",
    description: "Complete set of white connectors for modular furniture assembly",
    image: connectorSetWhite,
  },
  {
    id: "connector-set-black",
    name: "Connector Set",
    description: "Complete set of black connectors including corners, joints, and caps",
    image: connectorSetBlack,
  },
  {
    id: "furniture-spacers",
    name: "Furniture Spacers",
    description: "White plastic spacers for furniture leg height adjustment",
    image: furnitureSpacers,
  },
];
