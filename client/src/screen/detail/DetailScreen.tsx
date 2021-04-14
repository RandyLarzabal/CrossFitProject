import React from "react";

import { Container } from "../../component/ui/Template/Container";
import { Button } from "../../component";
import Carousel from 'react-elastic-carousel';
import imgWhite from "../../assets/img/product-colors/product-white.png";
import imgRed from "../../assets/img/product-colors/product-red.png";
import imgGreen from "../../assets/img/product-colors/product-green.png";

import { DetailS } from "./DetailScreen.style";

export default function DetailScreen(): JSX.Element {
    const items = [
        {id: 1, url:'../../assets/img/product-colors/product-white.png'},
        {id: 2, url:'../../assets/img/product-colors/product-red.png'},
        {id: 3, url:'../../assets/img/product-colors/product-green.png'}
    ]

    return (
        <Container>
            <DetailS>

                <div className="left">
                    <Carousel>
                        {items.map(item => <img key={item.id} src={item.url} />)}
                    </Carousel>
                    <p className="description">Entrez dans la légende avec la Nike Air Force 1 '07 LV8. Les couleurs revisitées soulignent les détails premium qui ont fait la renommée de ce modèle emblématique à l’apogée de la culture sneakers.</p>
                </div>

                <div className="right">
                    <div className="infos">
                        <p className="category">Chaussures pour homme</p>
                        <div className="flex">
                            <p className="title">Nike Air Max</p>
                            <p className="price">149,99 €</p>
                        </div>
                    </div>

                    <div className="colors">
                        <img src={imgWhite} alt="white"/>
                        <img src={imgRed} alt="red"/>
                        <img src={imgGreen} alt="green"/>
                    </div>

                    <div className="sizes">
                        <p>Sélectionner la taille</p>
                        <div className="sizes-buttons">
                            <Button label={"35"} color={"#F5F5F5"} />
                            <Button label={"36"} color={"#F5F5F5"} />
                            <Button label={"37"} color={"#F5F5F5"} />
                            <Button label={"38"} color={"#F5F5F5"} />

                            <Button label={"39"} color={"#F5F5F5"} />
                            <Button label={"40"} color={"#F5F5F5"} />
                            <Button label={"41"} color={"#F5F5F5"} />
                            <Button label={"42"} color={"#F5F5F5"} />

                            <Button label={"43"} color={"#F5F5F5"} />
                            <Button label={"44"} color={"#F5F5F5"} />
                            <Button label={"45"} color={"#F5F5F5"} />
                            <Button label={"46"} color={"#F5F5F5"} />
                        </div>
                    </div>
                    <Button label={"Ajouter au panier"} color={"#F58C03"} />
                </div>

            </DetailS>
        </Container>
    );
}
