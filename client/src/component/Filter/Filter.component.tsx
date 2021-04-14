import React, { FunctionComponent, useState } from "react";
import {
    FilterContent,
    FilterItem,
    FilterItemCheckbox,
    FilterItemRange,
    FilterS,
    FilterTilte,
} from "./Filter.style";
import { v4 as uuidv4 } from "uuid";
import InputRange, { Range } from "react-input-range";

interface OwnProps {
    type: "list" | "checkbox" | "range";
    title: string;
    data?: string[];
    range?: { min: number; max: number };
    handleSelectedItem: (value: string) => void;
    actualFilter: { filterKey: number; value: string };
}

import "react-input-range/lib/css/index.css";

type Props = OwnProps;

const FilterComponent: FunctionComponent<Props> = (props: Props) => {
    const { title, data, handleSelectedItem, actualFilter, type, range } = props;

    const [priceRange, setPriceRange] = useState<number | Range>({ min: 0, max: 250 });

    switch (type) {
        case "checkbox":
            return (
                <FilterS>
                    <FilterTilte>{title}</FilterTilte>
                    <FilterContent>
                        {data?.map((value) => (
                            <FilterItemCheckbox
                                className={actualFilter?.value === value ? "selected" : ""}
                                onClick={() => handleSelectedItem(value)}
                                key={uuidv4()}
                            >
                                {value}
                            </FilterItemCheckbox>
                        ))}
                    </FilterContent>
                </FilterS>
            );
        case "list":
            return (
                <FilterS>
                    <FilterTilte>{title}</FilterTilte>
                    <FilterContent>
                        {data?.map((value) => (
                            <FilterItem
                                className={actualFilter?.value === value ? "selected" : ""}
                                onClick={() => handleSelectedItem(value)}
                                key={uuidv4()}
                            >
                                {value}
                            </FilterItem>
                        ))}
                    </FilterContent>
                </FilterS>
            );
        case "range":
            return (
                <FilterS>
                    <FilterTilte>{title}</FilterTilte>
                    <FilterContent>
                        <InputRange
                            draggableTrack
                            onChangeComplete={(value) => handleSelectedItem(JSON.stringify(value))}
                            maxValue={range?.max}
                            minValue={range?.min}
                            onChange={(value) => {
                                setPriceRange(value);
                            }}
                            value={priceRange}
                        />
                    </FilterContent>
                </FilterS>
            );
    }
};

export default FilterComponent;
