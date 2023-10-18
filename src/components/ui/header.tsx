import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

export const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Hary</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};
