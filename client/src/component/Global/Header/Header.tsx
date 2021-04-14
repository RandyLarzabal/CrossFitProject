import React, { FC, useState } from "react";
import styles from "./style.module.scss";
import { useLocation } from "react-router-dom";
import Icon, { IconList } from "../../Icon/Icon";
import { Button, NavBar } from "../../index";
import Logo from "../../Logo/Logo";
import { HeaderBlackBar, HeaderBlackBarLink, HeaderContainer, HeaderS } from "./Header.style";
import { usePaymentContext } from "../../../context/PaymentContext";

const Header: FC = () => {
    const { blackBar } = styles;
    const { pathname } = useLocation();

    const { hero, button, navBar, heroImg } = styles;

    const { chart } = usePaymentContext();

    const [visibleNavBack, setVisibleNavBack] = useState(false);
    switch (pathname) {
        case "/":
            return (
                <HeaderS>
                    <HeaderBlackBar>
                        <HeaderBlackBarLink>AIDE</HeaderBlackBarLink>
                        <HeaderBlackBarLink className={"separator"}>CONNEXION</HeaderBlackBarLink>
                        <HeaderBlackBarLink>
                            <Icon icon={IconList.shop} size={25} color="#fff" />
                            <div>{chart.length}</div>
                        </HeaderBlackBarLink>
                        <HeaderBlackBarLink>
                            <Icon icon={IconList.search} size={20} color="#fff" />
                        </HeaderBlackBarLink>
                    </HeaderBlackBar>
                    <NavBar
                        setVisibility={setVisibleNavBack}
                        visibility={visibleNavBack}
                        location={"/"}
                    />
                    <HeaderContainer>
                        <Logo version={"white"} />
                        <Icon
                            icon={IconList.menu}
                            size={40}
                            color={"#fff"}
                            onClick={() => setVisibleNavBack(true)}
                        />
                    </HeaderContainer>
                </HeaderS>
            );
        default:
            return (
                <HeaderS>
                    <HeaderBlackBar>
                        <HeaderBlackBarLink>AIDE</HeaderBlackBarLink>
                        <HeaderBlackBarLink className={"separator"}>CONNEXION</HeaderBlackBarLink>
                        <HeaderBlackBarLink>
                            <Icon icon={IconList.shop} size={25} color="#fff" />
                            <div>{chart.length}</div>
                        </HeaderBlackBarLink>
                        <HeaderBlackBarLink>
                            <Icon icon={IconList.search} size={20} color="#fff" />
                        </HeaderBlackBarLink>
                    </HeaderBlackBar>
                    <NavBar
                        setVisibility={setVisibleNavBack}
                        visibility={visibleNavBack}
                        location={"/"}
                    />
                    <HeaderContainer>
                        <Logo version={"black"} />
                        <Icon
                            icon={IconList.menu}
                            size={40}
                            color={"#000"}
                            onClick={() => setVisibleNavBack(true)}
                        />
                    </HeaderContainer>
                </HeaderS>
            );
    }
};

export default Header;
