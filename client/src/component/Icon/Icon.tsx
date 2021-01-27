import React, { FunctionComponent } from "react";
import iconSet from "../../assets/icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

export enum IconList {
    "arrow",
    "like",
    "search",
    "see",
    "shop",
}
interface OwnProps {
    icon: IconList;
    size: number;
    color: string;
}

export type IconProps = OwnProps;

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
    const { icon, size, color } = props;
    const iconTab = ["arrow", "like", "search", "see", "shop"];
    return <IcomoonReact iconSet={iconSet} color={color} size={size} icon={iconTab[icon]} />;
};

export default Icon;
