import Image from "next/image";

export default function MainTitle() {
    return (
        <section id="about" className="title-container">
            <div className="titles-mask">
                <h1 className={"main-title"}>Joe Hollands</h1>
                <h2>Junior Software Developer</h2>
            </div>
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
            <p className="bio fade-prep">
                Two years ago, with a prior interest in computers and a passion
                for continuous learning and improvement, I began to teach myself
                programming in my spare time.
            </p>
            <p className="bio fade-prep">
                I've enjoyed the problem-solving aspects when creating projects
                enough that I have made it my goal to make a career change into
                software development.
            </p>
            <p className="bio fade-prep">
                I believe I've built a solid foundational knowledge of
                programming, where I can confidently continue to grow in my
                career as a Software Developer.
            </p>
        </section>
    );
}
