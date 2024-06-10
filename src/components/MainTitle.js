import Image from "next/image";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

export default function MainTitle() {
    return (
        <section id="title-container">
            <h1 className={"main-title"}>Joe Hollands</h1>
            <h2>Junior Software Developer</h2>
            <hr className="title-underscore"></hr>
            <div id="title-buttons">
                <a
                    className="button-anchor git-button"
                    href="https://github.com/Jobeyobey"
                    target="_blank"
                >
                    <Image
                        className="button-svg"
                        src={github}
                        width="20"
                        height="20"
                        alt="#"
                    />
                    <span className="button-text">Github</span>
                </a>
                <a
                    className="button-anchor linkedin-button"
                    href="https://www.linkedin.com/in/joehollands/"
                    target="_blank"
                >
                    <Image
                        className="button-svg"
                        src={linkedin}
                        width="20"
                        height="20"
                        alt="#"
                    />
                    <span className="button-text">LinkedIn</span>
                </a>
            </div>
        </section>
    );
}
