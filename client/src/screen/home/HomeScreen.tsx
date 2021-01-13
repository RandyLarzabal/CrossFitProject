import React, { useState } from "react";
import list from "../../db.json";
import { ProductCard } from "../../component";
import Title from "../../component/Title/Title";
import { inspect } from "util";
import global from "../../App.module.scss";
import Image from "../../component/Image/Image";
import heroImg from "../../assets/img/hero.jpg";
import Button from "../../component/Button/Button";
import styles from "./style.module.scss";
import ReassuranceCard from "../../component/ReassuranceCard/ReassuranceCard";

export default function HomeScreen(): JSX.Element {
    const { container, row } = global;
    const { hero } = styles;
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

            <div className={hero}>
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

            <div className={container}>
                <ReassuranceCard icon={"oui"} title={"LIVRAISON EN 48H"} description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"} />
            </div>
        </div>
    );
}
