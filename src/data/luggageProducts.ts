import clampsBuckles from "@/assets/products/luggage/clamps-buckles.jpg";
import cornerWheel from "@/assets/products/luggage/corner-wheel.jpg";
import combinationLock from "@/assets/products/luggage/combination-lock.jpg";
import doubleWheel from "@/assets/products/luggage/double-wheel.jpg";
import singleWheel from "@/assets/products/luggage/single-wheel.jpg";
import mouldedHandles from "@/assets/products/luggage/moulded-handles.jpg";
import radialWheel from "@/assets/products/luggage/radial-wheel.jpg";
import trolleyHandleRetractable from "@/assets/products/luggage/trolley-handle-retractable.jpg";
import trolleyHandleSystem from "@/assets/products/luggage/trolley-handle-system.jpg";

export interface LuggageProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const luggageProducts: LuggageProduct[] = [
  {
    id: "clamps-buckles",
    name: "Clamps & Buckles Set",
    description: "Assorted plastic clamps, buckles, and strap adjusters for bags and luggage.",
    image: clampsBuckles,
  },
  {
    id: "corner-wheel",
    name: "Corner Wheel Assembly",
    description: "Durable corner-mounted wheel with integrated bracket for suitcases.",
    image: cornerWheel,
  },
  {
    id: "combination-lock",
    name: "Combination Lock",
    description: "3-digit combination lock housing for secure luggage protection.",
    image: combinationLock,
  },
  {
    id: "double-wheel",
    name: "Double Spinner Wheels",
    description: "Premium double spinner wheel assemblies for smooth 360° mobility.",
    image: doubleWheel,
  },
  {
    id: "single-wheel",
    name: "Single Swivel Wheels",
    description: "Heavy-duty single swivel wheel set with mounting brackets.",
    image: singleWheel,
  },
  {
    id: "moulded-handles",
    name: "Moulded Handles",
    description: "Ergonomic injection-moulded carry handles in various sizes.",
    image: mouldedHandles,
  },
  {
    id: "radial-wheel",
    name: "Radial Wheel",
    description: "Compact radial wheel assembly for lightweight luggage and bags.",
    image: radialWheel,
  },
  {
    id: "trolley-handle-retractable",
    name: "Retractable Trolley Handle",
    description: "Telescopic trolley handle with comfortable grip for easy maneuverability.",
    image: trolleyHandleRetractable,
  },
  {
    id: "trolley-handle-system",
    name: "Trolley Handle System",
    description: "Complete telescopic handle system with aluminum tubes and plastic end caps.",
    image: trolleyHandleSystem,
  },
];
