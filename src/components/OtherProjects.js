"use client";

import SectionTitle from "./SectionTitle";
import Project from "./Project";
import projectsData from "@/projectsData";
import languageData from "@/languageData";
import FilterButton from "./FilterButton";
import React from "react";

export default function OtherProjects() {
    const [buttons, setButtons] = React.useState(languageData);
    const [projects, setProjects] = React.useState(projectsData);

    function toggleFilter(id) {
        let selectedButton = {};

        // Identify selected filter button and enable it. Assign that button to `selectedButton`
        setButtons((prevState) => {
            return prevState.map((button) => {
                selectedButton = button.id === id ? button : selectedButton;
                return button.id === id
                    ? { ...button, enabled: true }
                    : { ...button, enabled: false };
            });
        });
        // Use `selectedButton` to enable/disable relevant projects
        setProjects((prevState) => {
            return prevState.map((project) => {
                if (project.languages.includes(selectedButton.name)) {
                    return { ...project, enabled: true };
                } else {
                    return { ...project, enabled: false };
                }
            });
        });
    }

    const languageComponent = buttons.map((language) => {
        return (
            <FilterButton
                key={language.id}
                id={language.id}
                name={language.name}
                className={
                    language.enabled === true ? language.className : "disabled"
                }
                colour={language.colour}
                toggleFilter={toggleFilter}
            />
        );
    });
    const projectComponent = projects.map((project) => {
        if (project.enabled) {
            return (
                <Project
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    subtitle={project.subtitle}
                    languages={project.languages}
                    description1={project.description1}
                    description2={project.description2}
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    enabled={project.enabled}
                />
            );
        }
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
            <div id="language-filter">{languageComponent}</div>
            <div className="projects">{projectComponent}</div>
        </section>
    );
}
