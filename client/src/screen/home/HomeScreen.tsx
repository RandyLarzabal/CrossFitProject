import React, { useState } from "react";
import { Button, NavBar, Title, Image } from "../../component";
import global from "../../App.module.scss";
import imghero from "../../assets/img/hero.jpg";
import styles from "./style.module.scss";

import ReassuranceCard from "../../component/ReassuranceGroup/ReassuranceCard/ReassuranceCard";
import Logo from "../../component/Logo/Logo";

import ProductGroup, { GroupType } from "../../component/ProductGroup/ProductGroup";
import { IconList } from "../../component/Icon/Icon";
import ReassuranceGroup from "../../component/ReassuranceGroup/ReassuranceGroup";

export default function HomeScreen(): JSX.Element {
    const { container } = global;
    const { hero, button, navBar, heroImg, logoImg, greyBg } = styles;

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
                        icon={{ icon: IconList.SVG_1, color: "#FFF", size: 40 }}
                        className={button}
                    />
                </div>
                <Logo />
                <Image className={heroImg} src={imghero} alt={"Hero image"} size={"cover"} />
                <div className={container}>
                    <h1>LOREM IPSUM</h1>
                    <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
                    <Button label={"EN SAVOIR PLUS >>"} color={"#F58C03"} />
                </div>
            </div>

            <div className={container}>
                <Title text={"Nos Nouveautés"} />
                <ProductGroup groupType={GroupType.basic} />
            </div>
            <div className={greyBg}>
                <div className={container}>
                    <ReassuranceGroup />
                </div>
            </div>
            <div className={container}>
                <Title text={"Les Tendances"} />
                <ProductGroup groupType={GroupType.withMainProduct} />
            </div>
            <div className={greyBg}>
                <div className={container}>
                    <ProductGroup groupType={GroupType.withDescription} />
                </div>
            </div>
        </div>
    );
}
