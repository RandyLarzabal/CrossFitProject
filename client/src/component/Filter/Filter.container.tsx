import React, { Dispatch, FunctionComponent, SetStateAction, useCallback, useMemo } from "react";
import FilterComponent from "./Filter.component";

interface OwnProps {
    type: "list" | "checkbox" | "range";
    title: string;
    data?: string[];
    range?: { min: number; max: number };
    setFilters: Dispatch<SetStateAction<{ filterKey: number; value: string }[]>>;
    filters: { filterKey: number; value: string }[];
    filterKey: number;
}

type Props = OwnProps;

const FilterContainer: FunctionComponent<Props> = (props: Props) => {
    const { title, data, type, range, setFilters, filters, filterKey } = props;

    const handleSelectedItem = useCallback((value: string) => {
        setFilters((filters) => {
            const index = filters.findIndex((value1) => value1.filterKey === filterKey);
            if (index !== -1) filters.splice(index, 1);
            return [...filters, { value, filterKey }];
        });
    }, []);

    const handleMultipleSelectedItem = useCallback((value: string) => {
        setFilters((filters) => {
            const index = filters.findIndex((value1) => value1.filterKey === filterKey);
            if (index !== -1) filters.splice(index, 1);
            return [...filters, { value, filterKey }];
        });
    }, []);

    const actualFilter = useMemo(
        () => filters.filter((value) => value.filterKey === filterKey)[0],
        [filters, filterKey]
    );

    return (
        <FilterComponent
            handleSelectedItem={handleSelectedItem}
            title={title}
            type={type}
            data={data}
            range={range}
            actualFilter={actualFilter}
        />
    );
};

export default FilterContainer;
