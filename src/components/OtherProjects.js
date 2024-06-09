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
        <section>
            <SectionTitle title="Other Projects"></SectionTitle>
            {/* FILTER */}
            {projects}
        </section>
    );
}
