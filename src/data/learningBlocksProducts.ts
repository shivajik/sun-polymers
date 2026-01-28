import snapCubes from "@/assets/products/learning-blocks/snap-cubes.jpg";
import baseTenBlocks from "@/assets/products/learning-blocks/base-ten-blocks.jpg";
import buildingBlocks from "@/assets/products/learning-blocks/building-blocks.jpg";

export interface LearningBlocksProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const learningBlocksProducts: LearningBlocksProduct[] = [
  {
    id: "snap-cubes",
    name: "Snap Cubes Set",
    description: "Colorful interlocking snap cubes for 3D pattern building and spatial reasoning activities.",
    image: snapCubes,
  },
  {
    id: "base-ten-blocks",
    name: "Base Ten Blocks",
    description: "Place value learning set with units, rods, flats, and cubes for teaching decimal concepts.",
    image: baseTenBlocks,
  },
  {
    id: "building-blocks",
    name: "DIY Building Blocks",
    description: "Multi-color interlocking blocks for puzzle games, education toys, and creative building.",
    image: buildingBlocks,
  },
];
