import React, { useState } from "react";
import { Button, NavBar, Title, Image } from "../../component";
import global from "../../App.module.scss";
import imghero from "../../assets/img/hero.jpg";
import styles from "./style.module.scss";
import Logo from "../../component/Logo/Logo";

import ProductGroup, { GroupType } from "../../component/ProductGroup/ProductGroup";
import { IconList } from "../../component/Icon/Icon";
import ReassuranceGroup from "../../component/ReassuranceGroup/ReassuranceGroup";
import { Container } from "../../component/ui/Template/Container";

export default function HomeScreen(): JSX.Element {
    const { container } = global;
    const { hero, button, navBar, heroImg, logoImg } = styles;

    const [visibleNavBack, setVisibleNavBack] = useState(false);

    return (
        <div>
            <NavBar setVisibility={setVisibleNavBack} visibility={visibleNavBack} />
            <div className={hero}>
                <div className={navBar}>
                    <Logo />
                    <Button
                        handleClick={() => setVisibleNavBack(true)}
                        color={""}
                        label={""}
                        icon={{ icon: IconList.arrow, color: "#000000", size: 40 }}
                        className={button}
                    />
                </div>
                <Image className={heroImg} src={imghero} alt={"Hero image"} size={"cover"} />
                <div className={container}>
                    <h1>LOREM IPSUM</h1>
                    <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
                    <Button label={"EN SAVOIR PLUS >>"} color={"#F58C03"} />
                </div>
            </div>

            <Container>
                <Title text={"Nos Nouveautés"} />
                <ProductGroup groupType={GroupType.basic} />
                <ReassuranceGroup />
                <Title text={"Les Tendances"} />
                <ProductGroup groupType={GroupType.withMainProduct} />
                <ProductGroup groupType={GroupType.withDescription} />
            </Container>
        </div>
    );
}
