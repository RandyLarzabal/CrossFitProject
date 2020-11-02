import React, { useEffect, useState } from "react";
import list from "./file.json";

export type ColonnesProps = {
  alt: string;
  src: string;
};

export type SelecteurOptions = {
  beforeOnclick?: () => void;
  afterOnclick?: () => void;
  clickable?: boolean;
  visible?: boolean;
  maxItems: number;
};

export type OptionsProps = {
  autoplay?: boolean;
  interval?: number;
  defaultIndex?: number;
  randomise?: boolean;
  selecteur?: SelecteurOptions;
};

export type ProductCardType = {
  colonnes?: ColonnesProps[];
  options?: OptionsProps;
};

export function Caroussel(props: ProductCardType): JSX.Element {
  const { colonnes, options } = props;

  const [primaryScreen, setPrimaryScreen] = useState();
  const [index, setIndex] = useState<number>(0);
  const [maxIndex, setMaxIndex] = useState<number>(list.length);

  const changePrimaryScreen = (e: any) => {};

  useEffect(() => {
    if (options) {
      const { interval = 3000, autoplay = false } = options;
      if (autoplay) {
        const clock = setInterval(() => autoPlay(), interval);
        return () => {
          clearInterval(clock);
        };
      }
    }
  }, []);

  const autoPlay = () => {
    setIndex((index) => {
      return index >= maxIndex - 1 ? 0 : index + 1;
    });
  };

  const indexpicker = (key: number) => {
    setIndex(key);
  };

  return (
    <div>
      <img src={list[index].download_url} alt="" />
      {list.map((value, key) => (
        <div style={{cursor:"pointer"}} onClick={() => indexpicker(key)}>
          <img
            style={{ height: 100, width: 100 }}
            src={value.download_url}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
