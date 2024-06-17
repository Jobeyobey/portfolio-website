import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { basePath } from "../../next.config.mjs";

export default function FeaturedProject() {
    return (
        <section id="featured-project">
            <SectionTitle
                title="Featured Project"
                subtitle="The Boardgame Companion"
            />
            <div className="fade-prep">
                <div
                    aria-label="Languages this project uses"
                    className="languages"
                >
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
                            The Boardgame Companion is a web-app that allows
                            users to track and share their boardgame collection
                            and gameplay statistics with their friends.
                        </p>
                        <p className="project-desc-2">
                            It uses Python as a back-end, storing user data in
                            an SQL database. The front-end uses the Flask
                            framework.
                        </p>
                        <div className="center-links">
                            <a
                                className="site-link"
                                href="#"
                                target="#"
                                aria-label="The Board Game Companion"
                            >
                                View Site
                            </a>
                            <a
                                className="site-link"
                                href="#"
                                target="#"
                                aria-label="Github Repository for The Board Game Companion"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                    <Image
                        src={`${basePath}/images/placeholder/Featured-Project.png`}
                        width={480}
                        height={260}
                        alt="A laptop and mobile displaying The Boardgame Companion"
                    />
                </div>
            </div>
        </section>
    );
}
