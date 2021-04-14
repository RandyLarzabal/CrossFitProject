import React, { FC } from "react";
import "./style.scss";

export type RowProps = {
    children: JSX.Element | JSX.Element[];
};

export const Row: FC<RowProps> = (props: RowProps) => {
    const { children } = props;
    return <div className={"row"}>{children}</div>;
};
