import React from "react";
import Title from "../../component/Title/Title";
import global from "../../App.module.scss";
import Image from "../../component/Image/Image";
import heroImg from "../../assets/img/hero.jpg";
import Button from "../../component/Button/Button";
import styles from "./style.module.scss";

import ReassuranceCard from "../../component/ReassuranceCard/ReassuranceCard";

import ProductGroup, { TypeDonnees } from "../../component/ProductGroup/ProductGroup";

export default function HomeScreen(): JSX.Element {
    const { container, row } = global;
    const { hero } = styles;

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
                <div className={row}>
                    <ProductGroup type={TypeDonnees.nouveautes} />
                </div>
            </div>

            <div className={container}>
                <ReassuranceCard
                    icon={"oui"}
                    title={"LIVRAISON EN 48H"}
                    description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}
                />
            </div>
        </div>
    );
}
