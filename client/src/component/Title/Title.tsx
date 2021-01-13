import React, { FunctionComponent } from "react";

type Props = {
    text: string;
};

const Title: FunctionComponent<Props> = (props: Props) => {
    const { text } = props;
    return <h2>{text}</h2>;
};

export default Title;
