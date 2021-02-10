import React, {FunctionComponent} from "react";
import styles from "./style.module.scss";

import logo from "../../assets/img/logo/logo-white.svg";

const Logo: FunctionComponent = () => {
    const { logoImg } = styles;
    return (
        <img className={logoImg} src={logo} />
    );
};

export default Logo;

