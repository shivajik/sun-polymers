import arcGuidePlate from "@/assets/products/electrical/arc-guide-plate.jpg";
import blowerHousing from "@/assets/products/electrical/blower-housing.jpg";
import carrierLed from "@/assets/products/electrical/carrier-led.jpg";
import cflSocketHousing from "@/assets/products/electrical/cfl-socket-housing.jpg";
import electricalCover from "@/assets/products/electrical/electrical-cover.jpg";
import injectionMould1 from "@/assets/products/electrical/injection-mould-1.jpg";
import injectionMould2 from "@/assets/products/electrical/injection-mould-2.jpg";
import diffuser from "@/assets/products/electrical/diffuser.jpg";
import mcbBoxHousing from "@/assets/products/electrical/mcb-box-housing.jpg";
import nylonConnectors from "@/assets/products/electrical/nylon-connectors.jpg";

export interface ElectricalProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const electricalProducts: ElectricalProduct[] = [
  {
    id: "arc-guide-plate",
    name: "ARC Guide Plate Components",
    description: "Precision molded arc guide plate components for electrical switchgear applications.",
    image: arcGuidePlate,
  },
  {
    id: "blower-housing",
    name: "Blower Housing",
    description: "Durable blower housing with integrated mesh grille for ventilation systems.",
    image: blowerHousing,
  },
  {
    id: "carrier-led",
    name: "LED Carrier Assembly",
    description: "Wired LED carrier frame for lighting fixture installations.",
    image: carrierLed,
  },
  {
    id: "cfl-socket-housing",
    name: "CFL Socket Housing",
    description: "White CFL lamp socket housing with ventilation slots for heat dissipation.",
    image: cflSocketHousing,
  },
  {
    id: "electrical-cover",
    name: "Electrical Cover Panel",
    description: "Ventilated cover panel with mounting points for electrical enclosures.",
    image: electricalCover,
  },
  {
    id: "injection-mould-1",
    name: "Injection Mould - Multi Cavity",
    description: "Precision multi-cavity injection mould for high-volume electrical component production.",
    image: injectionMould1,
  },
  {
    id: "injection-mould-2",
    name: "Injection Mould - Single Cavity",
    description: "High-precision single cavity mould for electrical housing manufacturing.",
    image: injectionMould2,
  },
  {
    id: "diffuser",
    name: "Diffuser Housing",
    description: "Industrial diffuser housing units for air distribution systems.",
    image: diffuser,
  },
  {
    id: "mcb-box-housing",
    name: "MCB Box Housing",
    description: "Miniature circuit breaker box housing with pre-wired terminal connections.",
    image: mcbBoxHousing,
  },
  {
    id: "nylon-connectors",
    name: "Nylon 66 Connectors",
    description: "High-temperature resistant Nylon 66 connector blocks for electrical wiring.",
    image: nylonConnectors,
  },
];
