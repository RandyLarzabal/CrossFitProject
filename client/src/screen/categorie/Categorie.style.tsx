import styled from "styled-components";

export {
    CategorieS,
    CategorieTitle,
    CategorieResults,
    CategorieAriane,
    CategorieMainContent,
    CategorieProductContainer,
    CategorieFiltersContainer,
};

const CategorieS = styled.main``;
const CategorieTitle = styled.h1`
    font-size: 56px;
    font-family: "Monument", sans-serif;
    letter-spacing: 2.8px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 500;
`;

const CategorieResults = styled.p`
    font: 13px Adrianna;
    color: #8c8c8c;
`;

const CategorieAriane = styled.p`
    font: 13px Adrianna;
    flex: 1;
    text-align: right;
    color: #8c8c8c;
`;

const CategorieMainContent = styled.div`
    margin-top: 70px;
    display: flex;
`;
const CategorieProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    & > a {
        margin-bottom: 50px;
    }
`;

const CategorieFiltersContainer = styled.div`
    width: 300px;
    position: relative;

  margin-right: 16px;
    & > div {
        position: sticky;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      top :16px;
    }
`;
