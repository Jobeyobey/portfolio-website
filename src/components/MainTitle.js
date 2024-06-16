import Image from "next/image";

export default function MainTitle() {
    return (
        <section id="about" className="title-container">
            <h1 className={"main-title"}>Joe Hollands</h1>
            <h2>Junior Software Developer</h2>
            <hr className="title-underscore" aria-hidden="true"></hr>
            <div id="title-buttons">
                <a
                    className="button-anchor git-button"
                    href="https://github.com/Jobeyobey"
                    target="_blank"
                    aria-label="Joe Hollands Github"
                >
                    <Image
                        className="button-svg"
                        src={`/images/github-dark.svg`}
                        width="20"
                        height="20"
                        aria-hidden="true"
                    />
                    <span className="button-text">Github</span>
                </a>
                <a
                    className="button-anchor linkedin-button"
                    href="https://www.linkedin.com/in/joehollands/"
                    target="_blank"
                    aria-label="Joe Hollands LinkedIn"
                >
                    <Image
                        className="button-svg"
                        src={`/images/linkedin-light.svg`}
                        width="20"
                        height="20"
                        aria-hidden="true"
                    />
                    <span className="button-text">LinkedIn</span>
                </a>
            </div>
            <p className="bio">
                I&apos;m looking for a job because I would like to have one. I
                would like to work for money. I would like to make money while
                having fun so I can buy things I like while doing things I like.
            </p>
        </section>
    );
}
