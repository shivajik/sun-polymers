import degreeElbow from "@/assets/products/agriculture/90-degree-elbow.jpg";
import degreeTee from "@/assets/products/agriculture/90-degree-tee.jpg";
import crossTee from "@/assets/products/agriculture/cross-tee.jpg";
import ballValve from "@/assets/products/agriculture/ball-valve.jpg";
import clicksDripper from "@/assets/products/agriculture/clicks-dripper.jpg";
import dNetSprinkler from "@/assets/products/agriculture/d-net-sprinkler.jpg";
import elbowConnector from "@/assets/products/agriculture/elbow-connector.jpg";
import jTypeDripper from "@/assets/products/agriculture/j-type-dripper.jpg";
import plassimCoupling from "@/assets/products/agriculture/plassim-coupling.jpg";
import pvcSocket from "@/assets/products/agriculture/pvc-socket.jpg";
import straightConnector from "@/assets/products/agriculture/straight-connector.jpg";
import traveliteFilter from "@/assets/products/agriculture/travelite-filter.jpg";
import turboDripper from "@/assets/products/agriculture/turbo-dripper.jpg";
import unionBallValve from "@/assets/products/agriculture/union-ball-valve.jpg";
import inlineValve from "@/assets/products/agriculture/inline-valve.jpg";

export interface AgricultureProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const agricultureProducts: AgricultureProduct[] = [
  {
    id: "90-degree-elbow",
    name: "90 Degree Elbow",
    description: "PVC elbow fitting for right-angle pipe connections in irrigation systems.",
    image: degreeElbow,
  },
  {
    id: "90-degree-tee",
    name: "90 Degree Tee",
    description: "PVC tee fitting for three-way pipe connections in water distribution.",
    image: degreeTee,
  },
  {
    id: "cross-tee",
    name: "Cross Tee",
    description: "Four-way cross tee fitting for complex irrigation pipe networks.",
    image: crossTee,
  },
  {
    id: "ball-valve",
    name: "Ball Valve",
    description: "Threaded ball valve for precise water flow control in irrigation systems.",
    image: ballValve,
  },
  {
    id: "clicks-dripper",
    name: "Clicks Dripper",
    description: "Pressure-compensating dripper for uniform water distribution in drip irrigation.",
    image: clicksDripper,
  },
  {
    id: "d-net-sprinkler",
    name: "D-Net Sprinkler",
    description: "Rotating sprinkler head for efficient large-area irrigation coverage.",
    image: dNetSprinkler,
  },
  {
    id: "elbow-connector",
    name: "Elbow Connector",
    description: "Barbed elbow connector for flexible drip tubing connections.",
    image: elbowConnector,
  },
  {
    id: "j-type-dripper",
    name: "J-Type Dripper",
    description: "Adjustable flow drippers available in multiple flow rates for precision irrigation.",
    image: jTypeDripper,
  },
  {
    id: "plassim-coupling",
    name: "Plassim Coupling",
    description: "Compression coupling for joining HDPE pipes in agricultural water systems.",
    image: plassimCoupling,
  },
  {
    id: "pvc-socket",
    name: "PVC Socket",
    description: "PVC socket fitting for seamless pipe-to-pipe connections.",
    image: pvcSocket,
  },
  {
    id: "straight-connector",
    name: "Straight Connector",
    description: "Barbed straight connector for inline drip tubing extensions.",
    image: straightConnector,
  },
  {
    id: "travelite-filter",
    name: "Travelite Filter",
    description: "Y-type inline filter for removing sediments from irrigation water.",
    image: traveliteFilter,
  },
  {
    id: "turbo-dripper",
    name: "Turbo Dripper",
    description: "High-performance pressure-compensating dripper for consistent water delivery.",
    image: turboDripper,
  },
  {
    id: "union-ball-valve",
    name: "Union Ball Valve",
    description: "PVC union ball valve for easy installation and maintenance in pipelines.",
    image: unionBallValve,
  },
  {
    id: "inline-valve",
    name: "Inline Valve",
    description: "Compact inline valve set for controlling water flow in drip irrigation lines.",
    image: inlineValve,
  },
];
