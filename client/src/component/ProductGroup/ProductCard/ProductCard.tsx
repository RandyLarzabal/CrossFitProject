import React from "react";
import style from "./style.module.scss";
import global from "../../../App.module.scss";
import { Link } from "react-router-dom";
import { colors } from "../../../assets/Colors";
import { Button } from "../../index";
import { IconList } from "../../Icon/Icon";

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

export default function ProductCard(props: ProductCardType): JSX.Element {
    const { title, categorie, photo, price } = props;
    const {
        productCard,
        flex,
        categorie: categorieClass,
        price: priceClass,
        bar,
        title: titleClass,
        buttons,
        button,
    } = style;
    const { overflowHidden, positionRelative } = global;
    return (
        <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={productCard}>
                <div className={`${overflowHidden} ${positionRelative}`}>
                    <img src={photo.url} alt={photo.alt} />
                    <div className={buttons}>
                        <Button
                            label={"Acheter"}
                            handleClick={() => console.log("je suis clic")}
                            className={button}
                            icon={{ icon: IconList.shop, color: "#fff", size: 40 }}
                        />

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
