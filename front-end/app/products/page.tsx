import React from "react";
import ProductCatalogPage from "./ProductCatalog";

/**
 * ProductsPage
 * For more info: https://ui.shadcn.com/docs/components/carousel
 */
const ProductsPage = async() => {
  const data = await getData()
  return (
    <div
      className="h-screen flex items-center justify-center p-10"
      style={{ animation: "fade-down 0.5s" }}
    >
        <ProductCatalogPage productData={data} />
    </div>
  );
};

const getData = (async () => {
  try {
    // Fetch data from our GET method in the route file, as we are doing everything on server-side.
    const res = await import("../api/products/route");

    if (!(await res.GET()).ok) {
      throw new Error("Failed to fetch data");
    }

    return await (await res.GET()).json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})

export default ProductsPage;
