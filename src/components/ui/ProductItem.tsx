import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { DiscountsBadge } from "./discountsBadge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex w-full flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            priority
            src={product.imageUrls[0]}
            alt={`product image ${product.name}}`}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{ objectFit: "contain" }}
          />
          {product.discountPercentage > 0 && (
            <DiscountsBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountsBadge>
          )}
        </div>

        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-semibold">
                  R$ {product.totalPrice.toFixed(2).toLocaleString()}
                </p>
                <p className="text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="font-semibold">R$ {Number(product.basePrice)}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
