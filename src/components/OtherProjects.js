import SectionTitle from "./SectionTitle";
import Project from "./Project";
import projectsData from "@/projectsData";

export default function OtherProjects() {
    const projects = projectsData.map((project) => {
        return (
            <Project
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                languages={project.languages}
                description1={project.description1}
                description2={project.description2}
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
            />
        );
    });

    return (
        <section className="other-projects">
            <SectionTitle
                title="Other Projects"
                subtitle="Personal Projects and Coursework"
            ></SectionTitle>
            <p id="filter-description">
                Filter projects by selecting a language below
            </p>
            <div id="language-filter">
                <button className={`language-button python`}>
                    <p>Python</p>
                </button>
                <button className={`language-button html`}>
                    <p>HTML/CSS</p>
                </button>
                <button className={`language-button javascript`}>
                    <p>Javascript</p>
                </button>
                <button className={`language-button sql`}>
                    <p>SQL</p>
                </button>
                <button className={`language-button restapi`}>
                    <p>REST API</p>
                </button>
            </div>
            <div className="projects">{projects}</div>
        </section>
    );
}
