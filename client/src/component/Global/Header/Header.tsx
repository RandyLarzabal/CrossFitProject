import React, { FC, useState } from "react";
import styles from "./style.module.scss";
import { useLocation } from "react-router-dom";
import Icon, { IconList } from "../../Icon/Icon";
import { Button, Image, NavBar } from "../../index";
import Logo from "../../Logo/Logo";
import imghero from "../../../assets/img/hero.jpg";
import { Container } from "../../ui/Template/Container";

const Header: FC = () => {
    const { blackBar } = styles;
    const { pathname } = useLocation();

    const { hero, button, navBar, heroImg } = styles;

    const [visibleNavBack, setVisibleNavBack] = useState(false);
    switch (pathname) {
        case "/":
            return (
                <header>
                    <div className={blackBar}>
                        <div>
                            <a>AIDE</a>
                            <a className={styles.connexion}>CONNEXION</a>
                            <Icon icon={IconList.shop} size={25} color="#fff" />
                            <Icon icon={IconList.search} size={20} color="#fff" />
                        </div>
                    </div>
                    <NavBar
                        setVisibility={setVisibleNavBack}
                        visibility={visibleNavBack}
                        location={"/"}
                    />
                    <div className={hero}>
                        <div className={navBar}>
                            <Button
                                handleClick={() => setVisibleNavBack(true)}
                                color={""}
                                label={""}
                                icon={{ icon: IconList.menu, color: "#FFF", size: 40 }}
                                className={button}
                            />
                        </div>
                        <Logo />
                        <Image
                            className={heroImg}
                            src={imghero}
                            alt={"Hero image"}
                            size={"cover"}
                        />
                        <Container>
                            <h1>LOREM IPSUM</h1>
                            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
                            <Button label={"EN SAVOIR PLUS >>"} color={"#F58C03"} />
                        </Container>
                    </div>
                </header>
            );
        default:
            return (
                <header>
                    <div className={blackBar}>
                        <div>
                            <NavBar
                                setVisibility={setVisibleNavBack}
                                visibility={visibleNavBack}
                                location={"*"}
                            />
                            <a>AIDE</a>
                            <a className={styles.connexion}>CONNEXION</a>
                            <Icon icon={IconList.shop} size={25} color="#fff" />
                            <Icon icon={IconList.search} size={20} color="#fff" />
                        </div>
                    </div>
                    <div style={{ height: 120, position: "relative" }}>
                        <Logo />
                    </div>
                </header>
            );
    }
};

export default Header;
