import React, { FC } from "react";

type ImageProps = {
    src: string;
    alt: string;
    size: "cover" | "contain";
    className?: string;
};

const Image: FC<ImageProps> = (props: ImageProps) => {
    const { src, alt, size, className } = props;
    return <img src={src} alt={alt} className={className} style={{ objectFit: size }} />;
};

export default Image;
