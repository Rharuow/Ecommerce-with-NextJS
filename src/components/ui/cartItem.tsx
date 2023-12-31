import { CartContext, CartProduct } from "@/provider/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

export const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantity = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantity = () => {
    increaseProductQuantity(product.id);
  };
  const handleRemoveProduct = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center">
            <p className="text-sm font-bold">{product.totalPrice.toFixed(2)}</p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="mt-4 flex items-center gap-1">
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={handleDecreaseProductQuantity}
              className="h-8 w-8"
            >
              <ArrowLeftIcon size={12} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button
              size={"icon"}
              variant={"outline"}
              onClick={handleIncreaseProductQuantity}
              className="h-8 w-8"
            >
              <ArrowRightIcon size={12} />
            </Button>
          </div>
        </div>
      </div>

      <Button size={"icon"} variant={"outline"} onClick={handleRemoveProduct}>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};
