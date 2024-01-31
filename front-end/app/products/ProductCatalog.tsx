import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CatalogPage from "./CatalogPage";

// Set Product Type
type Products = {
  name: string;
  type: string;
  model: string;
  year: number;
  condition: string;
  price: number;
  image_url: string;
};

/**
 * Carousel Component
 * For more info: https://ui.shadcn.com/docs/components/carousel
 */
export default async function ProductCatalogPage(
  {productData}: {productData : Products[]}) {

  return (
    <Carousel
      className="w-full max-w-xs scale-80 md:scale-125"
    >
      <CarouselContent>
        {productData.map((element, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <CatalogPage product={element} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
