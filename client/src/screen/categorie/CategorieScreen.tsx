import React, { useEffect, useState } from "react";

import { Container } from "../../component/ui/Template/Container";
import {
    CategorieAriane,
    CategorieResults,
    CategorieS,
    CategorieTitle,
    CategorieMainContent,
    CategorieProductContainer,
    CategorieFiltersContainer,
} from "./Categorie.style";
import { Row } from "../../component/ui/Template/Row";
import { ProductCard } from "../../component";
import { Filter } from "../../component/Filter";
import { commerce } from "../../utils/Api";

export default function CategorieScreen({
    category_slug,
    category_label,
}: {
    category_slug: string;
    category_label: string;
}): JSX.Element {
    const [filters, setFilters] = useState<{ filterKey: number; value: string }[]>([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        commerce.products
            .list({ "category_slug.*": category_slug })
            .then((products: { data: any }) => {
                setProducts(products.data);
            })
            .catch((error: any) => {
                console.log("There was an error fetching the products", error);
            });
    }, [category_slug]);

    return (
        <CategorieS>
            <Container>
                <Row>
                    <CategorieTitle>{category_label}</CategorieTitle>
                </Row>
                <Row>
                    <CategorieAriane>Accueil / {category_label}</CategorieAriane>
                </Row>
                <Row>
                    <CategorieResults>
                        Showing 1-{products.length} of {products.length} results
                    </CategorieResults>
                </Row>
                <CategorieMainContent>
                    <CategorieFiltersContainer>
                        <div>
                            <Filter
                                title={"Catégorie"}
                                data={["Hoodies & Pull", "T-Shirt", "Débardeurs"]}
                                type={"list"}
                                setFilters={setFilters}
                                filters={filters}
                                filterKey={1}
                            />
                            <Filter
                                title={"Prix"}
                                range={{ max: 250, min: 0 }}
                                type={"range"}
                                setFilters={setFilters}
                                filters={filters}
                                filterKey={2}
                            />
                            <Filter
                                title={"Catégorie"}
                                data={["Hoodies & Pull", "T-Shirt", "Débardeurs"]}
                                type={"checkbox"}
                                setFilters={setFilters}
                                filters={filters}
                                filterKey={3}
                            />
                            <Filter
                                title={"Taille"}
                                data={["Hoodies & Pull", "T-Shirt", "Débardeurs"]}
                                type={"checkbox"}
                                setFilters={setFilters}
                                filters={filters}
                                filterKey={4}
                            />
                        </div>
                    </CategorieFiltersContainer>
                    <CategorieProductContainer>
                        {products.map((value: any) => (
                            <ProductCard
                                key={value.id}
                                className={"col-lg-4"}
                                title={value.name}
                                photo={{ url: "https://picsum.photos/200/300" }}
                                price={value.price.raw}
                                url={""}
                                categorie={
                                    value.categories.length > 0 ? value.categories[0].name : ""
                                }
                                description={value.description}
                            />
                        ))}
                    </CategorieProductContainer>
                </CategorieMainContent>
            </Container>
        </CategorieS>
    );
}
