import lotionPumpGreen from "@/assets/products/dispenser/lotion-pump-green.jpg";
import triggerSprayerWhite from "@/assets/products/dispenser/trigger-sprayer-white.jpg";
import lotionPumpWhite from "@/assets/products/dispenser/lotion-pump-white.jpg";
import miniTriggerSprayer from "@/assets/products/dispenser/mini-trigger-sprayer.jpg";
import fineMistSprayer from "@/assets/products/dispenser/fine-mist-sprayer.jpg";
import mistPumpSet from "@/assets/products/dispenser/mist-pump-set.jpg";
import triggerSprayerBlue from "@/assets/products/dispenser/trigger-sprayer-blue.jpg";

export interface DispenserProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const dispenserProducts: DispenserProduct[] = [
  {
    id: "lotion-pump-green",
    name: "Lotion Pump (Green)",
    description: "Smooth-action lotion pump with ergonomic nozzle for cosmetic and personal care products.",
    image: lotionPumpGreen,
  },
  {
    id: "trigger-sprayer-white",
    name: "Trigger Sprayer (White)",
    description: "Premium trigger sprayer with adjustable nozzle for household and industrial cleaning products.",
    image: triggerSprayerWhite,
  },
  {
    id: "lotion-pump-white",
    name: "Lotion Pump (White)",
    description: "Classic white lotion pump with ribbed collar for secure bottle attachment.",
    image: lotionPumpWhite,
  },
  {
    id: "mini-trigger-sprayer",
    name: "Mini Trigger Sprayer",
    description: "Compact trigger sprayer ideal for travel-size bottles and cosmetic applications.",
    image: miniTriggerSprayer,
  },
  {
    id: "fine-mist-sprayer",
    name: "Fine Mist Sprayer Set",
    description: "Premium fine mist pump sprayers for perfumes, toners, and facial mists.",
    image: fineMistSprayer,
  },
  {
    id: "mist-pump-set",
    name: "Mist Pump Duo",
    description: "Dual mist pump set with protective caps for pharmaceutical and cosmetic use.",
    image: mistPumpSet,
  },
  {
    id: "trigger-sprayer-blue",
    name: "Trigger Sprayer (Blue)",
    description: "Heavy-duty trigger sprayer with comfortable grip for cleaning and gardening applications.",
    image: triggerSprayerBlue,
  },
];
