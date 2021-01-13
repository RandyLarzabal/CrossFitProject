import React, { useState } from "react";
import list from "../../db.json";
import { ProductCard } from "../../component";
import Title from "../../component/Title/Title";
import { inspect } from "util";
import styles from "../../App.module.scss";

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
            <div className={container}>
                <div className={row}>
                    <Title text={"Nos Nouveautés"} />
                    {productListRender()}
                </div>
            </div>
        </div>
    );
}
