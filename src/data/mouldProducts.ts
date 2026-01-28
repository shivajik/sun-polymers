import chairMould from "@/assets/products/moulds/chair-mould.jpg";
import multiCavityMould from "@/assets/products/moulds/multi-cavity-mould.jpg";
import bumperMould from "@/assets/products/moulds/bumper-mould.jpg";
import precisionMould from "@/assets/products/moulds/precision-mould.jpg";
import stackMould from "@/assets/products/moulds/stack-mould.jpg";
import hotRunnerMould from "@/assets/products/moulds/hot-runner-mould.jpg";
import electronicMeterMould from "@/assets/products/moulds/electronic-meter-mould.jpg";

export interface MouldProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const mouldProducts: MouldProduct[] = [
  {
    id: "chair-mould",
    name: "Chair Mould",
    description: "Large-scale injection mould for manufacturing plastic chairs and seating components.",
    image: chairMould,
  },
  {
    id: "multi-cavity-mould",
    name: "Multi-Cavity Mould",
    description: "High-volume multi-cavity injection mould for efficient mass production.",
    image: multiCavityMould,
  },
  {
    id: "bumper-mould",
    name: "Automotive Bumper Mould",
    description: "Precision automotive bumper mould with guide pillars for accurate alignment.",
    image: bumperMould,
  },
  {
    id: "precision-mould",
    name: "Precision Component Mould",
    description: "Multi-cavity precision mould for small electrical and electronic components.",
    image: precisionMould,
  },
  {
    id: "stack-mould",
    name: "Stack Mould",
    description: "Double-level stack mould for doubling production output per cycle.",
    image: stackMould,
  },
  {
    id: "hot-runner-mould",
    name: "Hot Runner Mould",
    description: "Advanced hot runner mould system for waste-free injection moulding.",
    image: hotRunnerMould,
  },
  {
    id: "electronic-meter-mould",
    name: "Electronic Meter Housing Mould",
    description: "Single-cavity mould for precision electronic meter housings and enclosures.",
    image: electronicMeterMould,
  },
];
