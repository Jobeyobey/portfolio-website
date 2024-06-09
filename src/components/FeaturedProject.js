import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function FeaturedProject() {
    return (
        <section>
            <SectionTitle
                title="Featured Project"
                subtitle="The Boardgame Companion"
            />
            <div className={"language-container"}>
                <p>Python</p>
            </div>
            <div className={"language-container"}>
                <p>SQL</p>
            </div>
            <div className={"language-container"}>
                <p>Javascript</p>
            </div>
            <div className={"language-container"}>
                <p>HTML</p>
            </div>
            <div className={"language-container"}>
                <p>CSS</p>
            </div>
            <p>
                The Boardgame Companion is a web-app that allows users to track
                and share their boardgame collection and gameplay statistics
                with their friends.
            </p>
            <p>
                It uses Python as a back-end, storing user data in an SQL
                database. The front-end uses the Flask framework.
            </p>
            <a className="site-link" href="#" target="#">
                View Site
            </a>
            <a className="site-link" href="#" target="#">
                Github
            </a>
            <Image
                src={require("../images/placeholder-480x260.svg")}
                width={480}
                height={260}
                alt="#"
            />
        </section>
    );
}
