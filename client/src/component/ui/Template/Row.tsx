import React, { FC } from "react";
import "./style.scss";

export type RowProps = {
    children: JSX.Element | JSX.Element[];
};

export const Row: FC<RowProps> = (props) => {
    const { children } = props;
    return <div className={"row"}>{children}</div>;
};
