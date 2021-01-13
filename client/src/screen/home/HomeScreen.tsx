import React, { useState } from "react";
import list from "../../db.json";
import { ProductCard } from "../../component";
import Title from "../../component/Title/Title";
import { inspect } from "util";
import styles from "../../App.module.scss";
import Image from "../../component/Image/Image";
import heroImg from "../../assets/img/hero.jpg";

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
            </div>
            <div className={container}>
                <Title text={"Nos Nouveautés"} />
                <div className={row}>{productListRender()}</div>
            </div>
        </div>
    );
}
