import SectionTitle from "./SectionTitle";
import Image from "next/image";
import nextConfig from "../../next.config.mjs";
import projectsData from "@/projectsData";

export default function FeaturedProject() {
    let featuredProject = projectsData.filter((project) => {
        return project.isFeature === true;
    })[0];
    const isSiteLink = featuredProject.siteLink !== "";

    return (
        <section
            id="featured-project"
            tabIndex="0"
            aria-label="Project Section"
        >
            <SectionTitle
                title="Featured Project"
                subtitle={featuredProject.title}
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
                            {featuredProject.description1}
                        </p>
                        <p className="project-desc-2">
                            {featuredProject.description2}
                        </p>
                        <div className="center-links">
                            {isSiteLink && (
                                <a
                                    className="site-link"
                                    href={featuredProject.siteLink}
                                    target="_blank"
                                    aria-label={featuredProject.title}
                                >
                                    View Site
                                </a>
                            )}

                            <a
                                className="site-link"
                                href={featuredProject.github}
                                target="_blank"
                                aria-label={`Github Repository for ${featuredProject.title}`}
                            >
                                Github
                            </a>
                        </div>
                    </div>
                    <Image
                        src={featuredProject.featureImgSrc}
                        width={480}
                        height={260}
                        alt={featuredProject.featuredImgAlt}
                    />
                </div>
            </div>
        </section>
    );
}
