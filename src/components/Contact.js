import SectionTitle from "./SectionTitle";
import Image from "next/image";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

export default function Contact() {
    return (
        <section>
            <SectionTitle title="Contact" subtitle="Let's work together" />
            <p>Email me at</p>
            <a className="email" href="mailto: hollands.joe@gmail.com">
                hollands.joe@gmail.com
            </a>
            <p>Or find me on</p>
            <a href="#" target="_blank">
                <Image src={github} width="20" height="20" alt="#" />
            </a>
            <a href="#" target="_blank">
                <Image src={linkedin} width="20" height="20" alt="#" />
            </a>
        </section>
    );
}
