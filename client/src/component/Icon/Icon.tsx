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
}

interface OwnProps {
    icon: IconList;
    size: number;
    color: string;
}

export type IconProps = OwnProps;

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
    console.log(iconList(iconSet));
    const { icon, size, color } = props;
    const iconTab = ["arrow", "like", "search", "see", "shop", "menu"];
    return <IcomoonReact iconSet={iconSet} color={color} size={size} icon={iconTab[icon]} />;
};

export default Icon;
