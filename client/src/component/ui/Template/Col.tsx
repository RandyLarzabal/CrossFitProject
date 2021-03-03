import React, { FC } from "react";
import "./style.scss";

export type ColProps = {
    children: JSX.Element;
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
};

export const Col: FC<ColProps> = (props) => {
    const { children, md, xl, sm, lg } = props;

    let className = "";

    if (sm) className += `col-sm-${sm} `;
    if (md) className += `col-md-${md} `;
    if (lg) className += `col-lg-${lg} `;
    if (xl) className += `col-xl-${xl} `;

    return <div className={className}>{children}</div>;
};
