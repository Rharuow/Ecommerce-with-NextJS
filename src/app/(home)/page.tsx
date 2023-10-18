"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5">
      <Image
        src="/banner-home-01.png"
        alt="First banner home shoing '55% de desconto esse mês'"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full"
      />
    </main>
  );
}
