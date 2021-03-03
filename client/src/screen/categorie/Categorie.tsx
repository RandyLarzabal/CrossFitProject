import React, { useState } from "react";
import styles from "./style.module.scss";

import Logo from "../../component/Logo/Logo";
import {Container} from "../../component/ui/Template/Container";
import {ProductGroup} from "../../component";

export default function HomeScreen(): JSX.Element {
    const {} = styles;

    return(
        <div>
            <Container>
                <ProductGroup />
            </Container>
        </div>
    );
}
