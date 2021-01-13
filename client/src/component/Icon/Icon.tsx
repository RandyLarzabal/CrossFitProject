import React, { FunctionComponent } from "react";
import iconSet from "../../assets/icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

enum IconList {
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

type Props = OwnProps;

const Icon: FunctionComponent<Props> = (props: Props) => {
    const { icon, size, color } = props;
    return <IcomoonReact iconSet={iconSet} color={color} size={size} icon={icon} />;
};

export default Icon;
