import { prismaClient } from "@/lib/prisma";
import React from "react";

interface ProductPageProps {
  params: { slug: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const products = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (!products) return null;

  return <div>page</div>;
};

export default ProductPage;
