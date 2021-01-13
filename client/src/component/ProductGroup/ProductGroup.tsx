import React, { FunctionComponent, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import list from "../../db.json";
import style from "./style.module.scss";
import Title from "../Title/Title";
import { colors } from "../../assets/Colors";
import Button from "../Button/Button";

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
    const { grid, basic, withMainProduct, withDescription, title } = style;
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
            return (
                <>
                    <div className={`${grid} ${basic}`}>
                        {productListRender(3)}
                    </div>
                    <div style={{textAlign: "center", marginTop: "65px"}}>
                        <Button label={"EN SAVOIR PLUS >>"} color={colors.orange} />
                    </div>
                </>
            );
        case GroupType.withMainProduct:
            return (
                <>
                    <div className={`${grid} ${withMainProduct}`}>
                        {productListRender(5)}
                    </div>
                    <div style={{textAlign: "center", marginTop: "65px"}}>
                        <Button label={"EN SAVOIR PLUS >>"} color={colors.orange} />
                    </div>
                </>
            );
        case GroupType.withDescription:
            return (
                <>
                    <div className={`${grid} ${withDescription}`}>
                        <div>
                            <Title text={"Profitez de nos promotions"} bar="left" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur scelerisque metus id ultricies. Curabitur euismod volutpat ante vel suscipit.</p>
                            <Button label={"EN SAVOIR PLUS >>"} color={colors.orange} />
                        </div>
                        {productListRender(4)}
                    </div>
                </>
            );
    }
};

export default ProductGroup;
