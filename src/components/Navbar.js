import React from "react";
import { markActiveLink } from "../utils/utils";

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a id="#about" href="#about" onClick={markActiveLink}>
                        About
                    </a>
                </li>
                <li>
                    <a id="#skills" href="#skills" onClick={markActiveLink}>
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        id="#featured-project"
                        href="#featured-project"
                        onClick={markActiveLink}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a id="#contact" href="#contact" onClick={markActiveLink}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
