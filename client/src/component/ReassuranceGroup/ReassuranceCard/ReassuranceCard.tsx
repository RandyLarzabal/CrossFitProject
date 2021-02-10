import React, { FunctionComponent } from "react";
import style from "./style.module.scss";
import Icon, { IconList } from "../../Icon/Icon";

interface OwnProps {
    icon: IconList;
    title: string;
    description: string;
    className?: string;
}

type Props = OwnProps;

const ReassuranceCard: FunctionComponent<Props> = (props: Props) => {
    const { span, h3, p } = style;
    const { icon, title, description, className } = props;
    return (
        <div className={className}>
            <Icon icon={icon} size={48} color={"#000000"} />
            <span className={span} />
            <h3 className={h3}>{title}</h3>
            <p className={p}>{description}</p>
        </div>
    );
};

export default ReassuranceCard;
