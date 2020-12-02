import React, { useState } from "react";
import list from "../db.json";
import { ProductCard } from "../component";

export default function HomeScreen(): JSX.Element {
    const [products, setProductq] = useState(list);

    const productList = (): JSX.Element => {
        return (
            <>
                {products.chaussure.map((value) => (
                    <ProductCard
                        key={value.id}
                        title={value.title}
                        photo={value.primaryPhoto}
                        price={value.price}
                        url={value.productUrl}
                    />
                ))}
            </>
        );
    };
    return <div>{productList()}</div>;
}
