import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="fade-prep">
            <SectionTitle title="Contact" subtitle="Let's work together" />
            <div>
                <p>Email me at</p>
                <a id="email" href="mailto: hollands.joe@gmail.com">
                    hollands.joe@gmail.com
                </a>
            </div>
            <p>Or find me on</p>
            <div className="social-links">
                <a
                    href="https://github.com/Jobeyobey"
                    target="_blank"
                    aria-label="Joe Hollands Github"
                >
                    <Image
                        src={`/images/github-light.svg`}
                        width="20"
                        height="20"
                        aria-hidden="true"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/joehollands/"
                    target="_blank"
                    aria-label="Joe Hollands LinkedIn"
                >
                    <Image
                        src={`/images/linkedin-blue.svg`}
                        width="20"
                        height="20"
                        aria-hidden="true"
                    />
                </a>
            </div>
        </section>
    );
}
