import { prismaClient } from "@/lib/prisma";
import React from "react";
import { ProductImages } from "./components/productImages";
import { ProductInfo } from "./components/productInfo";
import { computeProductTotalPrice } from "@/helpers/product";
import { ProductList } from "@/components/ui/ProductList";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ProductDetailsPageProps {
  params: { slug: string };
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <SectionTitle>Produtos Recomendados</SectionTitle>
      <ProductList products={product.category.products} />
    </div>
  );
};

export default ProductDetailsPage;
