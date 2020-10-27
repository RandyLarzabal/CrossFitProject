import React, { FC } from "react";

export type ProductCardType = {
  title: string;
  description?: string;
  photo: string;
  sousTitre?: string;
  colorsNumber?: string;
  price: string;
};

export default function ProductCard(props: ProductCardType): JSX.Element {
  const { title, sousTitre, colorsNumber, description, photo, price } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{photo}</p>
      <p>{price}</p>
    </div>
  );
}
