import React from "react";
import styles from "./style.module.scss";

import logoWhite from "../../assets/img/logo/logo-white.svg";
import logoBlack from "../../assets/img/logo/logo-black.svg";

const Logo = ({ version }: { version: string }) => {
    const { logoImg } = styles;
    return <img className={logoImg} src={version === "white" ? logoWhite : logoBlack} />;
};

export default Logo;
