import React, { FunctionComponent } from "react";
import global from "../../App.module.scss";
import styles from "./style.module.scss";

type Props = {
    text: string;
};

const Title: FunctionComponent<Props> = (props: Props) => {
    const { text } = props;
    const { row } = global;
    const { title } = styles;
    return (
        <div className={row} style={{ marginBottom: 65 }}>
            <h2 className={title}>{text}</h2>
        </div>
    );
};

export default Title;
