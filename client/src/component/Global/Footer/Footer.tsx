import React from "react";
import styles from "./style.module.scss";
import global from "../../../App.module.scss";
import logo from "../../../assets/img/logo/logo-white.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} ${global.container}`}>
                <div className={styles.adresse}>
                    <h5>Adresse</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor.
                    </p>
                </div>
                <div className={styles.suivezNous}>
                    <h5>Suivez-nous</h5>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
                <div className={styles.horaires}>
                    <h5>Horaires</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor.
                    </p>
                </div>
                <img src={logo} alt="logo" />
            </div>
            <div className={`${global.container} ${styles.copyright}`}>
                <p>+33 7 89 58 64 75</p>
                <p>Une création par Momo la science</p>
                <p>fenuafitnes©2020</p>
            </div>
        </footer>
    );
};

export default Footer;
