import styled from "styled-components";

export { FilterS, FilterTilte, FilterContent, FilterItem, FilterItemCheckbox, FilterItemRange };

const FilterS = styled.div`
    width: 100%;
    margin-bottom: 40px;
`;
const FilterTilte = styled.h2`
    font-family: "Adrianna", sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    color: #222;
`;
const FilterContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 30px;
`;
const FilterItem = styled.p`
    margin-bottom: 6px;
    cursor: pointer;
    font-size: 16px;
    font-family: adrianna, sans-serif;
    color: #575757;

    &.selected {
        font-weight: bold;
    }
`;

const FilterItemCheckbox = styled.p`
    margin-bottom: 6px;
    cursor: pointer;
    font-size: 16px;
    font-family: adrianna, sans-serif;
    color: #575757;
    position: relative;
    padding-left: 20px;

    &.selected {
        font-weight: bold;

        &:before {
            background-color: black;
        }
    }

    &:before {
        content: "";
        width: 10px;
        height: 10px;
        border: 1px solid black;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
`;

const FilterItemRange = styled.input``;
