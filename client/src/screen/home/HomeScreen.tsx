import React, { useState } from "react";
import { NavBar, Title } from "../../component";
import global from "../../App.module.scss";
import Image from "../../component/Image/Image";
import imghero from "../../assets/img/hero.jpg";
import logo from "../../assets/img/logo/logo-white.svg";
import Button from "../../component/Button/Button";
import styles from "./style.module.scss";

import ReassuranceCard from "../../component/ReassuranceGroup/ReassuranceCard/ReassuranceCard";

import ProductGroup, { GroupType } from "../../component/ProductGroup/ProductGroup";
import { IconList } from "../../component/Icon/Icon";

export default function HomeScreen(): JSX.Element {
    const { container } = global;
    const { hero, button, navBar, heroImg, logoImg } = styles;

    const [visibleNavBack, setVisibleNavBack] = useState(false);
    return (
        <div>
            <NavBar setVisibility={setVisibleNavBack} visibility={visibleNavBack} />
            <div className={hero}>
                <div className={navBar}>
                    <img src="" alt="" />
                    <Button
                        handleClick={() => setVisibleNavBack(true)}
                        color={""}
                        label={""}
                        icon={{ icon: IconList.arrow, color: "#000000", size: 40 }}
                        className={button}
                    />
                </div>
                <img className={logoImg} src={logo}></img>
                <Image className={heroImg} src={imghero} alt={"Hero image"} size={"cover"} />
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
