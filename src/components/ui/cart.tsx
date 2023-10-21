import React, { useContext } from "react";
import { Badge } from "./badge";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "@/provider/cart";
import { CartItem } from "./cartItem";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

export const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  const handleFinishPurshaseClick = async () => {
    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <ScrollArea>
        <div className="flex h-full flex-col gap-5">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center font-semibold">Carrinho vazio</p>
          )}
        </div>
      </ScrollArea>

      <div className="flex flex-col gap-3">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>SubTotal</p>
          <p>R$ {subTotal.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>GRÁTIS</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Descontos</p>
          <p>R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>

        <Button
          className="mt-7 font-bold uppercase"
          onClick={handleFinishPurshaseClick}
        >
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
};
