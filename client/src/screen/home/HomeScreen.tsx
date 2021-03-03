import React, { useState } from "react";
import { Button, NavBar, Title, Image } from "../../component";
import global from "../../App.module.scss";

import styles from "./style.module.scss";


import ProductGroup, { GroupType } from "../../component/ProductGroup/ProductGroup";

import ReassuranceGroup from "../../component/ReassuranceGroup/ReassuranceGroup";

export default function HomeScreen(): JSX.Element {
    const { container } = global;
    const { hero, button, navBar, heroImg, logoImg, greyBg } = styles;


    return (
        <div>
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
