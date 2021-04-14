import React from "react";
import { Button, Title, Image } from "../../component";

import ProductGroup, { GroupType } from "../../component/ProductGroup/ProductGroup";

import ReassuranceGroup from "../../component/ReassuranceGroup/ReassuranceGroup";
import { Container } from "../../component/ui/Template/Container";

import imghero from "../../assets/img/hero.jpg";
import { HomeGreyBg, HomeHero, HomeS } from "./HomeScreen.style";
export default function HomeScreen(): JSX.Element {
    return (
        <HomeS>
            <HomeHero>
                <Image src={imghero} alt={"Hero image"} size={"cover"} />
                <Container>
                    <h1>LOREM IPSUM</h1>
                    <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
                    <Button label={"EN SAVOIR PLUS >>"} color={"#F58C03"} />
                </Container>
            </HomeHero>
            <Container>
                <Title text={"Nos Nouveautés"} />
                <ProductGroup groupType={GroupType.basic} />
            </Container>
            <HomeGreyBg>
                <Container>
                    <ReassuranceGroup />
                </Container>
            </HomeGreyBg>
            <Container>
                <Title text={"Les Tendances"} />
                <ProductGroup groupType={GroupType.withMainProduct} />
            </Container>
            <HomeGreyBg>
                <Container>
                    <ProductGroup groupType={GroupType.withDescription} />
                </Container>
            </HomeGreyBg>
        </HomeS>
    );
}
