import React, { FunctionComponent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./style.module.scss";

interface OwnProps {}

type Props = OwnProps;

const NavBar: FunctionComponent<Props> = (props) => {
    const { navBar, button, close } = style;
    const [visibility, setVisibility] = useState(false);
    return (
        <>
            <button className={button} onClick={() => setVisibility(true)}>
                open
            </button>
            <div className={navBar} style={{ height: visibility ? "100vh" : 0 }}>
                <nav>
                    <button className={button + " " + close} onClick={() => setVisibility(false)}>
                        X
                    </button>
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
                            <NavLink to="/Streetwear">Streetwear</NavLink>
                        </li>
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
                            <NavLink to="/Streetwear">Streetwear</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Streetwear">Streetwear</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default NavBar;
