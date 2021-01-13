import React, { FC } from "react";
import styles from "./style.module.scss";

type ButtonProps = {
    label: string;
    color: string;
    handleClick?: () => void;
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { label, color, handleClick } = props;
    const { button } = styles;
    return (
        <button
            onClick={handleClick}
            className={button}
            type={"button"}
            style={{ backgroundColor: color }}
        >
            {label}
        </button>
    );
};

export default Button;
