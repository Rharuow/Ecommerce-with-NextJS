import Image from "next/image";
import { Categories } from "./components/Categories";
import { prismaClient } from "@/lib/prisma";
import { ProductList } from "./components/ProductList";
import { SectionTitle } from "./components/SectionTitle";
import { PromoBanner } from "./components/PromoBanner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <main className="mt-2 flex flex-col gap-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="First banner home showing '55% de desconto esse mês'"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Second banner home showing '55% de desconto em mouses'"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Second banner home showing '20% de desconto em fones'"
      />
    </main>
  );
}
