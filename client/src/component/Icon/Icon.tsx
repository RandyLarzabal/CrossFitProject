import React, { FunctionComponent } from "react";
import iconSet from "../../assets/icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

export enum IconList {
    "arrow",
    "like",
    "search",
    "see",
    "shop",
    "menu",
    "cross",
}

interface OwnProps {
    icon: IconList;
    size: number;
    color: string;
    onClick?: () => void;
}

export type IconProps = OwnProps;

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
    const { icon, size, color, onClick } = props;
    const iconTab = ["arrow", "like", "search", "see", "shop", "menu", "cross"];
    return (
        <IcomoonReact
            onClick={onClick}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={iconTab[icon]}
        />
    );
};

export default Icon;
