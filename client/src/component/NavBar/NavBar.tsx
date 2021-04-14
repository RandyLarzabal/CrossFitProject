import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";
import { Button } from "../index";
import { IconList } from "../Icon/Icon";

type Props = {
    location: string;
    visibility: boolean;
    setVisibility: Dispatch<SetStateAction<boolean>>;
};

const NavBar: FunctionComponent<Props> = (props: Props) => {
    const { visibility, setVisibility } = props;
    const { navBar, close } = style;

    return (
        <div className={navBar} style={{ height: visibility ? "100vh" : 0 }}>
            <Button
                label={""}
                className={close}
                handleClick={() => setVisibility(false)}
                icon={{ icon: IconList.cross, size: 40, color: "#000000" }}
            />
            <nav onClick={() => setVisibility(false)}>
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/homme">Homme</NavLink>
                    </li>
                    <li>
                        <NavLink to="/femme">Femme</NavLink>
                    </li>
                    <li>
                        <NavLink to="/streetwear">Streetwear</NavLink>
                    </li>
                    <li>
                        <NavLink to="/accessoire">Accessoire</NavLink>
                    </li>
                    <li>
                        <NavLink to="/edition-limite">Edition Limité</NavLink>
                    </li>
                    <li>
                        <NavLink to="/promotion">Promotion</NavLink>
                    </li>
                    <li>
                        <NavLink to="/enfant">Enfant</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
