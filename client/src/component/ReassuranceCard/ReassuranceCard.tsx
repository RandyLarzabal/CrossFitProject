import React, { FunctionComponent } from "react";
import style from "./style.module.scss";

interface OwnProps {
    icon: string;
    title: string;
    description: string;
}

type Props = OwnProps;

const ReassuranceCard: FunctionComponent<Props> = (props: Props) => {
    const { span, h3, p } = style;
    const { icon, title, description } = props;
    return (
        <div>
            {icon}
            <span className={span}></span>
            <h3 className={h3}>{title}</h3>
            <p className={p}>{description}</p>
        </div>
    );
};

export default ReassuranceCard;
