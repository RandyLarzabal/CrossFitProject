import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { colors } from "../../../assets/Colors";

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
    handleBuy?: (product: any) => void;
    handleSeeMore?: (product: any) => void;
    handleLike?: (product: any) => void;
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
        buttons
    } = style;
    return (
        <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={productCard}>
                <div style={{ position: "relative" }}>
                    <img src={photo.url} alt={photo.alt} />
                    <div className={buttons} style={{ position: "absolute", bottom: 0, left: 0, width: "100%", overflow: "hidden", transform: "translateY(45px)" }}>
                        <button
                            style={{
                                width: "50%",
                                height: 45,
                                border: "none",
                                color: "#fff",
                                fontSize: 11,
                                outline: "none",
                                fontWeight: "bold",
                                backgroundColor: colors.black,
                            }}
                            onClick={() => null}
                        >
                            X Acheter
                        </button>
                        <button
                            style={{
                                width: "50%",
                                height: 45,
                                border: "none",
                                color: "#fff",
                                fontSize: 11,
                                outline: "none",
                                fontWeight: "bold",
                                backgroundColor: colors.orange,
                            }}
                            onClick={() => null}
                        >
                            X Voir Plus
                        </button>
                    </div>
                </div>
                <div className={flex}>
                    <p className={categorieClass}>{categorie}</p>
                    <h4 className={priceClass}>{price} €</h4>
                </div>

                <div className={bar} />

                <h3 className={titleClass}>{title}</h3>
            </div>
        </Link>
    );
}
