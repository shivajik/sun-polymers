import stationerySector from "@/assets/products/stationery/stationery-sector.jpg";
import scale30cm from "@/assets/products/stationery/30cm-scale.jpg";
import colourBox from "@/assets/products/stationery/colour-box.jpg";
import geometryBox from "@/assets/products/stationery/geometry-box.jpg";
import paletteBox from "@/assets/products/stationery/palette-box.jpg";
import tapeDispenser from "@/assets/products/stationery/tape-dispenser.jpg";

export interface StationeryProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const stationeryProducts: StationeryProduct[] = [
  {
    id: 1,
    name: "Geometry Box Set",
    description: "Complete geometry set with compass, divider, ruler, sharpener, and eraser in a metal case.",
    image: stationerySector,
  },
  {
    id: 2,
    name: "30cm Scale",
    description: "Precision 30cm transparent ruler with clear markings.",
    image: scale30cm,
  },
  {
    id: 3,
    name: "Colour Box",
    description: "Durable plastic colour box for organizing art supplies.",
    image: colourBox,
  },
  {
    id: 4,
    name: "Geometry Box",
    description: "Plastic geometry box with compartments for mathematical instruments.",
    image: geometryBox,
  },
  {
    id: 5,
    name: "Palette Box",
    description: "Multi-well palette box for watercolors and acrylic paints.",
    image: paletteBox,
  },
  {
    id: 6,
    name: "Tape Dispenser",
    description: "Heavy-duty tape dispenser with non-slip base.",
    image: tapeDispenser,
  },
];
