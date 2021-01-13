import React from "react";
import { Title } from "../../component";
import global from "../../App.module.scss";
import Image from "../../component/Image/Image";
import heroImg from "../../assets/img/hero.jpg";
import Button from "../../component/Button/Button";
import styles from "./style.module.scss";

import ReassuranceCard from "../../component/ReassuranceGroup/ReassuranceCard/ReassuranceCard";

import ProductGroup, { TypeDonnees, GroupType } from "../../component/ProductGroup/ProductGroup";
import Icon from "../../component/Icon/Icon";

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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Title text={"Nos Nouveautés"} />
                <ProductGroup groupType={GroupType.basic} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Title text={"Les Tendances"} />
                <ProductGroup groupType={GroupType.withMainProduct} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <ProductGroup groupType={GroupType.withDescription} />
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
