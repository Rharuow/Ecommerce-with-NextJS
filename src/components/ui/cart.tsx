import React, { useContext } from "react";
import { Badge } from "./badge";
import { ShapesIcon } from "lucide-react";
import { CartContext } from "@/provider/cart";

export const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShapesIcon size={16} />
        Catalogo
      </Badge>
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};
