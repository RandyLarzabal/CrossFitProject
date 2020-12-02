import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export type PhotoBasics = {
    url: string;
    alt?: string;
};

export type ProductCardType = {
    title: string;
    description?: string;
    photo: PhotoBasics;
    sousTitre?: string;
    price: number;
    url: string;
    rating?: number;
};

export function ProductCard(props: ProductCardType): JSX.Element {
    const { title, sousTitre, photo, price } = props;
    return (
        <Link to={"/"}>
            <img src={photo.url} alt={photo.alt} />
            <h3>{title}</h3>
            <p className="gray">{sousTitre}</p>
            <p>{price}</p>
        </Link>
    );
}
