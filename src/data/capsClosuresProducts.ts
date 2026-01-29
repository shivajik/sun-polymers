import ftc14mm15mm from "@/assets/products/caps-closures/14mm-15mm-ftc.jpg";
import ftc17mm19mm from "@/assets/products/caps-closures/17mm-19mm-ftc.jpg";
import ftc19mm22mm from "@/assets/products/caps-closures/19mm-22mm-ftc.jpg";
import ftc24mmRange1 from "@/assets/products/caps-closures/24mm-ftc-range1.jpg";
import ftc24mmRange2 from "@/assets/products/caps-closures/24mm-ftc-range2.jpg";
import ftc25mm from "@/assets/products/caps-closures/25mm-ftc.jpg";
import ftc25mm28mm from "@/assets/products/caps-closures/25mm-28mm-ftc.jpg";
import ftc28mm38mm from "@/assets/products/caps-closures/28mm-38mm-ftc.jpg";
import ftc38mm45mm from "@/assets/products/caps-closures/38mm-45mm-ftc.jpg";
import ftc46mm53mm from "@/assets/products/caps-closures/46mm-53mm-ftc.jpg";
import perfumeCaps from "@/assets/products/caps-closures/perfume-caps.jpg";
import mistPumps from "@/assets/products/caps-closures/mist-pumps.jpg";
import lotionPumps from "@/assets/products/caps-closures/lotion-pumps.jpg";
import triggerPumps from "@/assets/products/caps-closures/trigger-pumps.jpg";

export interface CapsClosuresProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const capsClosuresProducts: CapsClosuresProduct[] = [
  {
    id: "14mm-15mm-ftc",
    name: "14mm & 15mm Flip Top Caps",
    description: "14mm Long FTC, 14mm Short FTC, 15mm FTC, 15mm Square FTC, 15mm Oval FTC, 15mm SSFT range.",
    image: ftc14mm15mm,
  },
  {
    id: "17mm-19mm-ftc",
    name: "17mm & 19mm Flip Top Caps",
    description: "17mm FTC, 19mm Long BeK FTC, 19mm Short BeK FTC, 19mm Diamond FTC, 19mm Short FTC variants.",
    image: ftc17mm19mm,
  },
  {
    id: "19mm-22mm-ftc",
    name: "19mm & 22mm Flip Top Caps",
    description: "19mm Short FTC, 19mm Kettle FTC, 19mm T Shape FTC, 19mm XS FTC, 22mm Oval FTC, 22mm SSFT.",
    image: ftc19mm22mm,
  },
  {
    id: "24mm-ftc-range1",
    name: "24mm Flip Top Caps - Range 1",
    description: "24mm FTC Without Plug, 24mm FTC, 24mm Long BeK FTC, 24mm Long FTC, 24mm Long Presstop, 24mm Short BeK FTC.",
    image: ftc24mmRange1,
  },
  {
    id: "24mm-ftc-range2",
    name: "24mm Flip Top Caps - Range 2",
    description: "Extended range of 24mm caps including specialty variants for diverse packaging needs.",
    image: ftc24mmRange2,
  },
  {
    id: "25mm-ftc",
    name: "25mm Flip Top Caps",
    description: "25mm New FTC, 25mm BEK FTC, 25mm Kettle FTC, 25mm Mushroom FTC, 25mm Oval FTC range.",
    image: ftc25mm,
  },
  {
    id: "25mm-28mm-ftc",
    name: "25mm & 28mm Flip Top Caps",
    description: "25mm SSFT, 28mm BeK FTC, 28mm Diamond FTC, 28mm FTC, 28mm Kettle FTC, 28mm New FTC.",
    image: ftc25mm28mm,
  },
  {
    id: "28mm-38mm-ftc",
    name: "28mm & 38mm Flip Top Caps",
    description: "28mm Presstop, 28mm T Shape FTC, 32mm Ketchup FTC, 38mm CH Double FTC, 38mm CRC, 38mm Double FTC.",
    image: ftc28mm38mm,
  },
  {
    id: "38mm-45mm-ftc",
    name: "38mm & 45mm Flip Top Caps",
    description: "38mm Herb FTC, 38mm Ketchup FTC, 38mm Salt FTC, 38mm Tablet FTC, 38mm Two Fold FTC, 45mm Tablet FTC.",
    image: ftc38mm45mm,
  },
  {
    id: "46mm-53mm-ftc",
    name: "46mm & 53mm Flip Top Caps",
    description: "46mm Double FTC, 53mm CH Double FTC, 53mm Double FTC, Chap Stick caps with value-added services.",
    image: ftc46mm53mm,
  },
  {
    id: "perfume-caps",
    name: "Perfume Bottle Caps",
    description: "Premium perfume bottle caps with decorative finishes including metalizing and foiling options.",
    image: perfumeCaps,
  },
  {
    id: "mist-pumps",
    name: "Mist Pumps",
    description: "Fine mist spray pumps for perfumes, toners, and facial mist applications.",
    image: mistPumps,
  },
  {
    id: "lotion-pumps",
    name: "Lotion Pumps",
    description: "Smooth-action lotion pumps for cosmetic and personal care product dispensing.",
    image: lotionPumps,
  },
  {
    id: "trigger-pumps",
    name: "Trigger Pumps",
    description: "Heavy-duty trigger sprayers for household cleaning and industrial applications.",
    image: triggerPumps,
  },
];
