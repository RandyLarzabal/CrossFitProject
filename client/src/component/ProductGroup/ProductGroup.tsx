import React, { FunctionComponent, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import list from "../../db.json";
import style from "./style.module.scss";

export enum TypeDonnees {
    nouveautes,
}

export enum GroupType {
    basic,
    withMainProduct,
    withDescription,
}

interface OwnProps {
    type?: TypeDonnees;
    groupType?: GroupType;
}

type Props = OwnProps;

const ProductGroup: FunctionComponent<Props> = (props: Props) => {
    const { type, groupType = GroupType.basic } = props;
    const { grid, basic, withMainProduct, withDescription } = style;
    const [products, setProducts] = useState(list.nouveautes);

    const productListRender = (max: number): JSX.Element => {
        return (
            <>
                {products.map(
                    (value, index) =>
                        index < max && (
                            <ProductCard
                                key={value.id}
                                title={value.title}
                                photo={value.primaryPhoto}
                                price={value.price}
                                url={value.productUrl}
                                categorie={value.categorie}
                            />
                        )
                )}
            </>
        );
    };

    switch (groupType) {
        case GroupType.basic:
            return <div className={`${grid} ${basic}`}>{productListRender(3)}</div>;
        case GroupType.withMainProduct:
            return <div className={`${grid} ${withMainProduct}`}>{productListRender(5)}</div>;
        case GroupType.withDescription:
            return <div className={`${grid} ${withDescription}`}>{productListRender(4)}</div>;
    }
};

export default ProductGroup;
