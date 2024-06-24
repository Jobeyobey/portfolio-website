import SectionTitle from "./SectionTitle";
import Image from "next/image";
import nextConfig from "../../next.config.mjs";

export default function Contact() {
    return (
        <section id="contact" tabIndex="0" aria-label="Contact Section">
            <SectionTitle
                title="Contact"
                subtitle="Open to job opportunities"
            />
            <div className="fade-prep">
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
                            src={`${nextConfig.basePath}/images/github-light.svg`}
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
                            src={`${nextConfig.basePath}/images/linkedin-blue.svg`}
                            width="20"
                            height="20"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
