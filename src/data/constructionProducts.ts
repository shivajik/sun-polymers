import pvcShimPad from "@/assets/products/construction/pvc-shim-pad.jpg";
import spacers from "@/assets/products/construction/spacers.jpg";
import spacersColored from "@/assets/products/construction/spacers-colored.jpeg";
import uShimPad from "@/assets/products/construction/u-shim-pad.jpeg";
import orionBucket from "@/assets/products/construction/orion-bucket.jpg";
import dynamicBucket from "@/assets/products/construction/dynamic-bucket.jpg";
import galaxyBucket from "@/assets/products/construction/galaxy-bucket.jpg";
import spiBucket from "@/assets/products/construction/spi-bucket.jpg";

import scaffoldingTag from "@/assets/products/construction/scaffolding-tag.jpg";
import safetyHelmetYellow from "@/assets/products/construction/safety-helmet-yellow.webp";
import safetyHelmetNape from "@/assets/products/construction/safety-helmet-nape.jpg";
import lanyardHarness from "@/assets/products/construction/lanyard-harness.jpg";
import pvcCone from "@/assets/products/construction/pvc-cone.jpg";
import pvcPipe from "@/assets/products/construction/pvc-pipe.jpg";
import pvcChamfer from "@/assets/products/construction/pvc-chamfer.jpg";
import miscFittings1 from "@/assets/products/construction/misc-fittings-1.jpg";


export interface ConstructionProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const constructionProducts: ConstructionProduct[] = [
  {
    id: 1,
    name: "PVC Packing Shim Pad",
    description: "Available in 1 to 10 MM thickness",
    image: pvcShimPad,
  },
  {
    id: 17,
    name: "U-Shaped Shim Pad",
    description: "Black U-shaped packing shim for precise alignment",
    image: uShimPad,
  },
  {
    id: 2,
    name: "Spacers",
    description: "Available in 1 to 5 MM sizes",
    image: spacers,
  },
  {
    id: 16,
    name: "Colored Spacers",
    description: "Available in multiple colors - Green, Black, White, Blue, Red",
    image: spacersColored,
  },
  {
    id: 3,
    name: "Orion Bucket 8 Ltr",
    description: "Durable 8-liter construction bucket",
    image: orionBucket,
  },
  {
    id: 4,
    name: "Dynamic Bucket 10 Ltr",
    description: "Heavy-duty 10-liter bucket",
    image: dynamicBucket,
  },
  {
    id: 5,
    name: "Galaxy Bucket 12 Ltr",
    description: "Large capacity 12-liter bucket",
    image: galaxyBucket,
  },
  {
    id: 6,
    name: "SPI Bucket 12 Ltr",
    description: "Italy model design, 12-liter capacity",
    image: spiBucket,
  },
  {
    id: 9,
    name: "Safety Helmet - Yellow",
    description: "Industrial safety helmet in high-visibility yellow",
    image: safetyHelmetYellow,
  },
  {
    id: 10,
    name: "Safety Helmet - Nape Type",
    description: "Industrial safety helmet with nape strap",
    image: safetyHelmetNape,
  },
  {
    id: 11,
    name: "Lanyard and Safety Harness",
    description: "Fall protection safety equipment",
    image: lanyardHarness,
  },
  {
    id: 8,
    name: "Scaffolding Tag Holder",
    description: "Safety inspection and erection record holder",
    image: scaffoldingTag,
  },
  {
    id: 12,
    name: "PVC Cone",
    description: "Traffic and safety marking cone",
    image: pvcCone,
  },
  {
    id: 13,
    name: "PVC Pipe",
    description: "Construction-grade PVC piping",
    image: pvcPipe,
  },
  {
    id: 14,
    name: "PVC Chamfer",
    description: "Concrete forming chamfer strips",
    image: pvcChamfer,
  },
  {
    id: 15,
    name: "Miscellaneous Fittings",
    description: "Various construction fittings and accessories",
    image: miscFittings1,
  },
];
