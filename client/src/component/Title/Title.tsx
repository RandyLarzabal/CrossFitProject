import React, { FunctionComponent } from "react";
import global from "../../App.module.scss";
import styles from "./style.module.scss";

type Props = {
    text: string;
    bar?: string;
    className?: string;
};

const Title: FunctionComponent<Props> = (props: Props) => {
    const { text, bar, className } = props;
    const { row, mv5 } = global;
    const { title, left } = styles;
    return (
        <div className={`${row} ${mv5} ${className}`}>
            <h2 className={bar === "left" ? `${title} ${left}` : title}>{text}</h2>
        </div>
    );
};

export default Title;
