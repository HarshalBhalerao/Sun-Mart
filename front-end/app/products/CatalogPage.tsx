import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";

// Set Products Type
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
 * CatalogPage - Single Catalog entry inside card component
 */
const CatalogPage = async({ product }: { product: Products }) => {
  // Method to change 2500 to CAD $2,500
  const convertToCurrency = () => {
    const amountData = parseInt(product.price.toString());
    const formatted = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    }).format(amountData);

    return { formatted };
  };

  return (
    <Card className="lg:max-w-md w-full">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-3xl">{product.name}</CardTitle>
          <Button
            variant="outline"
            title="More Information about this product"
            size="icon"
          >
            <InfoCircledIcon />
          </Button>
        </div>
        <CardDescription>Type: {product.type}</CardDescription>
        <CardDescription>Model: {product.model}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          key={product.name}
          src={product.image_url}
          loading="eager"
          alt="Card Image"
          className="w-full"
        />
      </CardContent>
      <CardFooter>Price: {convertToCurrency().formatted}</CardFooter>
      <div className="flex pb-6 justify-center items-center">
        <Button
          variant="default"
          title="Order this product now!"
          size="default"
        >
          Order Now!
        </Button>
      </div>
    </Card>
  );
};

export default CatalogPage;
