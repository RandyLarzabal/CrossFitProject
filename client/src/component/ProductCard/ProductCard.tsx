import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export type PhotoBasics = {
    url: string;
    alt?: string;
};

export type ProductCardType = {
    title: string;
    description?: string;
    photo: PhotoBasics;
    categorie?: string;
    price: number;
    url: string;
    rating?: number;
};

export function ProductCard(props: ProductCardType): JSX.Element {
    const { title, categorie, photo, price } = props;
    const {
        productCard,
        flex,
        categorie: categorieClass,
        price: priceClass,
        bar,
        title: titleClass,
    } = style;
    return (
        <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={productCard}>
                <img src={photo.url} alt={photo.alt} />

                <div className={flex}>
                    <p className={categorieClass}>{categorie}</p>
                    <h4 className={priceClass}>{price} €</h4>
                </div>

                <div className={bar} />

                <h3 className={titleClass}>{title}</h3>
            </div>
        </Link>

        /*
        <Link to={"/"}>
            <img src={photo.url} alt={photo.alt} />
            <h3>{title}</h3>
            <p className="gray">{sousTitre}</p>
            <p>{price}</p>
        </Link>
        */
    );
}
