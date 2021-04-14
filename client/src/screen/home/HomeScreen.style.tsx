import styled from "styled-components";

export { HomeS, HomeHero, HomeGreyBg };
const HomeS = styled.main``;

const HomeHero = styled.div`
    height: 800px;
    margin-top: -80px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-position: center -100px;
        z-index: -1;
    }

    h1 {
        margin-bottom: 10px;
        color: #fff;
    }

    p {
        margin-bottom: 50px;
        color: #fff;
        font-family: "Adrianna-CondenseBold", sans-serif;
        font-size: 22px;
    }
`;

const HomeGreyBg = styled.div`
    margin-top: 100px;
    padding: 100px 0;
    background-color: #fbfbfb;
`;
