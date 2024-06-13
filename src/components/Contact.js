import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact">
            <SectionTitle title="Contact" subtitle="Let's work together" />
            <p>Email me at</p>
            <a id="email" href="mailto: hollands.joe@gmail.com">
                hollands.joe@gmail.com
            </a>
            <p>Or find me on</p>
            <div className="social-links">
                <a href="https://github.com/Jobeyobey" target="_blank">
                    <Image
                        src={`/images/github-light.svg`}
                        width="20"
                        height="20"
                        alt="#"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/joehollands/"
                    target="_blank"
                >
                    <Image
                        src={`/images/linkedin-blue.svg`}
                        width="20"
                        height="20"
                        alt="#"
                    />
                </a>
            </div>
        </section>
    );
}
