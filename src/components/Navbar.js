import React from "react";

export default function Navbar() {
    function handleClick(event) {
        const linkId = event.target.id;

        switch (linkId) {
            case "#about":
                document.getElementById("about").focus();
                break;
            case "#skills":
                document.getElementById("skills").focus();
                break;
            case "#featured-project":
                document.getElementById("featured-project").focus();
                break;
            case "#contact":
                document.getElementById("contact").focus();
        }
    }

    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a
                        id="#about"
                        href="#about"
                        onClick={(e) => {
                            handleClick(e);
                        }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        id="#skills"
                        href="#skills"
                        onClick={(e) => {
                            handleClick(e);
                        }}
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        id="#featured-project"
                        href="#featured-project"
                        onClick={(e) => {
                            handleClick(e);
                        }}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        id="#contact"
                        href="#contact"
                        onClick={(e) => {
                            handleClick(e);
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
