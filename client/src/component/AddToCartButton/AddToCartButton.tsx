import React from "react";

export type ProductCardType = {
    title: string;
    link: string;
};

export default function AddToCartButton(props: ProductCardType): JSX.Element {
    const { title, link } = props;
    return (
        <div>
            <p>{title}</p>
            <p>{link}</p>
        </div>
    );
}
