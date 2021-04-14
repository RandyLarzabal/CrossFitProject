import React, { FC } from "react";
import styles from "./style.module.scss";

export enum Types {
    "list",
    "slice",
    "checkbox"
}

type FilterProps = {
    label: string;
    type: Types;
    categories: string[];
    min?: number;
    max?: number;
};

const Filter: FC<FilterProps> = (props: FilterProps) => {
    const { label, type, categories, min, max } = props;

    switch (type) {

        case Types.list:
            return (
                <div
                    className={`${type}`}
                >
                    <h2>{label}</h2>
                    {
                        categories.map((categorie, i) => <p key={i}>{categorie}</p>)
                    }
                </div>
            );

        case Types.slice:
            return (
                <div
                    className={`${type}`}
                >
                    <h2>{label}</h2>
                    Filtre slice
                </div>
            );

        case Types.checkbox:
            return (
                <div
                    className={`${type}`}
                >
                    <h2>{label}</h2>
                    Filtre checkbox
                </div>
            );

    }
};

export default Filter;
