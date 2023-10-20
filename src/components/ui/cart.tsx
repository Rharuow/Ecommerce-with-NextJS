import React, { useContext } from "react";
import { Badge } from "./badge";
import { ShapesIcon } from "lucide-react";
import { CartContext } from "@/provider/cart";
import { CartItem } from "./cartItem";

export const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShapesIcon size={16} />
        Catalogo
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
