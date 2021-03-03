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
    const { visibility, setVisibility, location } = props;
    const { navBar, close , menu } = style;

    switch (location) {
        case "/":
            return (
                <div className={navBar} style={{ height: visibility ? "100vh" : 0 }}>
                    <Button
                        label={""}
                        className={close}
                        handleClick={() => setVisibility(false)}
                        icon={{ icon: IconList.shop, size: 40, color: "#000000" }}
                    />
                    <nav>
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
            );
        default:
            return (
                <nav>
                    <ul className={menu}>
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
            );
    }
};

export default NavBar;
