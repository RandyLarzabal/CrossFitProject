import React, { FunctionComponent } from "react";
import global from "../../App.module.scss";
import styles from "./style.module.scss";

type Props = {
    text: string;
    bar?: string;
};

const Title: FunctionComponent<Props> = (props: Props) => {
    const { text, bar } = props;
    const { row } = global;
    const { title, left } = styles;
    return (
        <div className={row} style={{ marginBottom: 65 }}>
            <h2 className={bar === "left" ? `${title} ${left}` : title}>{text}</h2>
        </div>
    );
};

export default Title;
