import React, { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

const NavBar: FunctionComponent<Props> = (props) => {
    return (
        <div>
            <button>close</button>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "white",
                    position: "fixed",
                    zIndex: 9999999999,
                }}
            >
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 26,
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                to="/"
                            >
                                Accueil
                            </NavLink>
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
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
