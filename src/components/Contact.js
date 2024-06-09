import SectionTitle from "./SectionTitle";

export default function Contact() {
    return (
        <section>
            <SectionTitle title="Contact" subtitle="Let's work together" />
            <p>Email me at</p>
            <a className="email" href="mailto: hollands.joe@gmail.com">
                hollands.joe@gmail.com
            </a>
            <p>Or find me on</p>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
        </section>
    );
}
