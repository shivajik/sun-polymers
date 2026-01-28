import scale30cm from "@/assets/products/stationery/30cm-scale.jpg";
import tapeDispenser from "@/assets/products/stationery/tape-dispenser.jpg";
import colourBox from "@/assets/products/stationery/colour-box.jpg";
import paletteBox from "@/assets/products/stationery/palette-box.jpg";
import geometryBox from "@/assets/products/stationery/geometry-box.jpg";

export interface StationeryProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const stationeryProducts: StationeryProduct[] = [
  {
    id: "30cm-scale",
    name: "30cm Ruler",
    description: "Transparent plastic ruler with precise metric and imperial measurements.",
    image: scale30cm,
  },
  {
    id: "tape-dispenser",
    name: "BOPP Tape Dispenser",
    description: "Heavy-duty desktop tape dispenser with weighted non-slip base.",
    image: tapeDispenser,
  },
  {
    id: "colour-box",
    name: "Artist Colour Box",
    description: "Multi-compartment watercolor palette box with mixing wells and brush holder.",
    image: colourBox,
  },
  {
    id: "palette-box",
    name: "Folding Palette Box",
    description: "Compact folding palette with multiple mixing compartments for artists.",
    image: paletteBox,
  },
  {
    id: "geometry-box",
    name: "Geometry Box Set",
    description: "Complete geometry set with compass, protractor, set squares, and accessories.",
    image: geometryBox,
  },
];
