import React, { useState } from "react";
import list from "./file.json";

export type ColonnesProps = {
  alt: string;
  src: string;
};

export type ProductCardType = {
  colonnes?: ColonnesProps[];
};

export function Caroussel(props: ProductCardType): JSX.Element {
  const { colonnes } = props;

  console.log(list);

  const [primaryScreen, setPrimaryScreen] = useState();

  const changePrimaryScreen = (e: any) => {};

  return (
    <div>
      {list.map((value) => (
        <div style={{ height: 100, width: 100 }}>
          <img
            style={{ height: "auto", width: "100%" }}
            src={value.download_url}
            alt={value.author}
          />
        </div>
      ))}
    </div>
  );
}
