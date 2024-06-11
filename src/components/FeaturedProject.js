import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function FeaturedProject() {
    return (
        <section>
            <SectionTitle
                title="Featured Project"
                subtitle="The Boardgame Companion"
            />
            <div className="languages">
                <div className={"language-container python"}>
                    <p>Python</p>
                </div>
                <div className={"language-container html"}>
                    <p>HTML/CSS</p>
                </div>
                <div className={"language-container javascript"}>
                    <p>Javascript</p>
                </div>
                <div className={"language-container sql"}>
                    <p>SQL</p>
                </div>
                <div className={"language-container restapi"}>
                    <p>REST API</p>
                </div>
            </div>
            <div className="feature-container">
                <div className="feature-info">
                    <p className="project-desc-1">
                        The Boardgame Companion is a web-app that allows users
                        to track and share their boardgame collection and
                        gameplay statistics with their friends.
                    </p>
                    <p className="project-desc-2">
                        It uses Python as a back-end, storing user data in an
                        SQL database. The front-end uses the Flask framework.
                    </p>
                    <a className="site-link project-site" href="#" target="#">
                        View Site
                    </a>
                    <a className="site-link git-project" href="#" target="#">
                        Github
                    </a>
                </div>
                <Image
                    src={require("../images/placeholder-480x260.svg")}
                    width={480}
                    height={260}
                    alt="#"
                />
            </div>
        </section>
    );
}
