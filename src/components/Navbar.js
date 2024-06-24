import React from "react";

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a id="#about" href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a id="#skills" href="#skills">
                        Skills
                    </a>
                </li>
                <li>
                    <a id="#featured-project" href="#featured-project">
                        Projects
                    </a>
                </li>
                <li>
                    <a id="#contact" href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
