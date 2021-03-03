import React, { FC } from "react";
import "./style.scss";
export type ContainerProps = {
    children: JSX.Element | JSX.Element[];
    fluid?: boolean;
};

export const Container: FC<ContainerProps> = (props) => {
    const { children, fluid } = props;

    let className = "container";

    if (fluid) className += "-fluid";

    return <div className={className}> {children} </div>;
};
