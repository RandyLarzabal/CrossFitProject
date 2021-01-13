import React, { FC } from "react";
import styles from "./style.module.scss";

type ButtonProps = {
    label: string;
    color: string;
};

const Image: FC<ButtonProps> = (props: ButtonProps) => {
    const { label, color } = props;
    const { button } = styles;
    return (
        <button className={button} type={"button"} style={{backgroundColor: color}}>{label}</button>
    );
};

export default Image;
