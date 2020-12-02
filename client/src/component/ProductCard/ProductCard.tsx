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
    categorie?: string;
    price: number;
    url: string;
    rating?: number;
};

export function ProductCard(props: ProductCardType): JSX.Element {
    const { title, categorie, photo, price } = props;
    return (

        <Link to={"/"} style={{textDecoration: "none"}}>
            <div className="productCard">

                <img src={photo.url} alt={photo.alt} />
                
                <div className="flex">
                    <p className="categorie">{categorie}</p>
                    <h4 className="price">{price} €</h4>
                </div>
                
                <div className="bar"></div>
                
                <h3 className="title">{title}</h3>

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
