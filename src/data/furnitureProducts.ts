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
import furnitureFittingsSet from "@/assets/products/furniture/furniture-fittings-set.jpg";

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
  {
    id: "corner-joint-black",
    name: "Corner Joint (Black)",
    description: "Heavy-duty black corner joint for robust furniture frames",
    image: cornerJointBlack,
  },
  {
    id: "l-joint-bracket",
    name: "L-Joint Bracket",
    description: "Angled L-joint bracket with pin connector for secure assembly",
    image: lJointBracket,
  },
  {
    id: "corner-plate",
    name: "Corner Plate",
    description: "Reinforced corner plate with diagonal ribbing for extra strength",
    image: cornerPlate,
  },
  {
    id: "channel-clip",
    name: "Channel Clip",
    description: "Snap-fit channel clip for panel and board mounting",
    image: channelClip,
  },
  {
    id: "pivot-bracket",
    name: "Pivot Bracket",
    description: "Rotating pivot bracket for adjustable furniture components",
    image: pivotBracket,
  },
  {
    id: "end-cap-rectangular",
    name: "Rectangular End Cap",
    description: "Protective end cap for rectangular tube profiles",
    image: endCapRectangular,
  },
  {
    id: "tube-sleeve",
    name: "Tube Sleeve",
    description: "Protective sleeve for round tube connections",
    image: tubeSleeve,
  },
  {
    id: "handle-grip",
    name: "Handle Grip",
    description: "Ergonomic handle grip for drawers and cabinet doors",
    image: handleGrip,
  },
  {
    id: "round-end-cap",
    name: "Round End Cap",
    description: "Ribbed end cap for round tube furniture legs",
    image: roundEndCap,
  },
  {
    id: "drawer-handle",
    name: "Drawer Handle",
    description: "Sleek drawer handle for modern furniture applications",
    image: drawerHandle,
  },
  {
    id: "square-end-cap-black",
    name: "Square End Cap (Black)",
    description: "Heavy-duty square end cap for rectangular tube profiles",
    image: squareEndCapBlack,
  },
  {
    id: "connector-set-white",
    name: "Connector Set (White)",
    description: "Complete set of white connectors for modular furniture assembly",
    image: connectorSetWhite,
  },
  {
    id: "connector-set-black",
    name: "Connector Set (Black)",
    description: "Complete set of black connectors including corners, joints, and caps",
    image: connectorSetBlack,
  },
  {
    id: "furniture-fittings-set",
    name: "Furniture Fittings Set",
    description: "Comprehensive collection of furniture fittings and connectors for modular assembly",
    image: furnitureFittingsSet,
  },
];
