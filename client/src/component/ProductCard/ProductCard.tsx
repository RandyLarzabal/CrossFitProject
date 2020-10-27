import React from "react";
import "./style.scss";
import {Link} from "react-router-dom"


export type ProductCardType = {
  title: string;
  description?: string;
  photo: string;
  sousTitre?: string;
  colorsNumber?: string;
  price: string;
  url:string;
};

export function ProductCard(props: ProductCardType): JSX.Element {
  const { title, sousTitre, colorsNumber, description, photo, price , url } = props;
  return (
    <Link to={"/"} >
        <img src={photo} alt="product" />
            <h3>{title}</h3>
            <p className="gray">{sousTitre}</p>
            <p className="gray sixteen">{colorsNumber}</p>
            <p>{price}</p>
    </Link>
  );
}
