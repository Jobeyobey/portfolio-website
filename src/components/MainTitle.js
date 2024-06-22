import Image from "next/image";
import nextConfig from "../../next.config.mjs";

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
                        src={`${nextConfig.basePath}/images/github-dark.svg`}
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
                        src={`${nextConfig.basePath}/images/linkedin-light.svg`}
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
                I&apos;ve greatly enjoyed the problem-solving aspects when
                creating projects, and have decided to make it my goal to switch
                career into software development.
            </p>
            <p className="bio fade-prep">
                I believe I&apos;ve built a solid foundational knowledge of
                programming, where I can confidently continue to grow in my
                future career as a Software Developer.
            </p>
        </section>
    );
}
