import React, { FC } from "react";

type ImageProps = {
    src: string;
    alt: string;
    size: "cover" | "contain";
};

const Image: FC<ImageProps> = (props: ImageProps) => {
    const { src, alt, size } = props;
    return (
        <img src={src} alt={alt} style={{objectFit: size}} />
    );
};

export default Image;
