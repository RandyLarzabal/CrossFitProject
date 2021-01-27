import React, { FC } from "react";
import styles from "./style.module.scss";
import Icon, { IconProps } from "../Icon/Icon";

type ButtonProps = {
    label: string;
    color?: string;
    handleClick?: () => void;
    className?: string;
} & { icon?: IconProps };

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { label, handleClick, icon, color, className = "" } = props;
    const { button } = styles;
    return (
        <button
            onClick={handleClick}
            className={`${button} ${className}`}
            type={"button"}
            style={{ backgroundColor: color }}
        >
            {label}
            {icon && <Icon icon={icon.icon} size={icon.size} color={icon.color} />}
        </button>
    );
};

export default Button;
