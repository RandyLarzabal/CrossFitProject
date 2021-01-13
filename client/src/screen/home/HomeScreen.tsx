import React, { useState } from "react";
import list from "../../db.json";
import { ProductCard } from "../../component";
import Title from "../../component/Title/Title";
import { inspect } from "util";
import styles from "../../App.module.scss";
import Image from "../../component/Image/Image";
import heroImg from "../../assets/img/hero.jpg";
import Button from "../../component/Button/Button";

export default function HomeScreen(): JSX.Element {
    const { container, row } = styles;
    const [products, setProducts] = useState(list);

    const productListRender = (): JSX.Element => {
        return (
            <>
                {products.chaussure.map((value) => (
                    <ProductCard
                        key={value.id}
                        title={value.title}
                        photo={value.primaryPhoto}
                        price={value.price}
                        url={value.productUrl}
                        categorie={value.categorie}
                    />
                ))}
            </>
        );
    };
    return (
        <div>
            <div>
                <Image src={heroImg} alt={"Hero image"} size={"cover"} />
                <div className={container}>
                    <h1>LOREM IPSUM</h1>
                    <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
                    <Button label={"EN SAVOIR PLUS >>"} color={"#F58C03"} />
                </div>
            </div>
            <div className={container}>
                <Title text={"Nos Nouveautés"} />
                <div className={row}>{productListRender()}</div>
            </div>
        </div>
    );
}
