import styled from "styled-components";

export { HeaderS, HeaderBlackBar, HeaderContainer, HeaderBlackBarLink };

const HeaderS = styled.header``;
const HeaderBlackBar = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #1a1919;
    padding: 0 54px;
`;
const HeaderBlackBarLink = styled.a`
    height: 100%;
    line-height: 42px;
    font-family: "AdriannaCondensedDemiBold", sans-serif;
    font-size: 14px;
    color: white;
    padding: 0 20px;
    cursor: pointer;
    position: relative;

    &.separator {
        border-left: 1px solid white;
        border-right: 1px solid white;
    }

    & > div {
      background-color: rgb(245,140,3);
      position: absolute;
      height: 20px;
      line-height: initial;
      width: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 6px;
      top: 19px;
    }
`;

const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    padding: 10px 54px;
    z-index: 2;
    position: relative;
    align-items: center;
    justify-content: space-between;
    svg {
        cursor: pointer;
        z-index: 5;
    }
`;
