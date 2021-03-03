import React, { useState } from "react";
import styles from "./style.module.scss";

import Logo from "../../component/Logo/Logo";
import {Container} from "../../component/ui/Template/Container";
import {ProductGroup} from "../../component";
import Filter, {Types} from "../../component/Filter/Filter";

export default function HomeScreen(): JSX.Element {
    const {} = styles;

    return(
        <div>
            <Container>
                <ProductGroup />
            </Container>
            <Filter label="CATEGORIE" type={Types.list} categories={["T-Shirt", "Short"]} />
            <Filter label="PRIX" type={Types.slice} categories={["T-Shirt", "Short"]} />
            <Filter label="TAILLE" type={Types.checkbox} categories={["T-Shirt", "Short"]} />
        </div>
    );
}
