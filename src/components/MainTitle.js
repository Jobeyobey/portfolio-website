import Image from "next/image";
// import github from ".../public/images/github.svg";
// import linkedin from ".../public/images/linkedin.svg";

export default function MainTitle() {
    return (
        <section id="about" className="title-container">
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
                        src={`/images/github-dark.svg`}
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
                        src={`/images/linkedin-light.svg`}
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
