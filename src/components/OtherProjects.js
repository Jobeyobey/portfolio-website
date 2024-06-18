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

        // Fade out all projects
        let fadeNode = document.querySelectorAll(".fade-selector");
        let fadeList = Array.from(fadeNode);
        for (const project of fadeList) {
            project.classList.remove("fade-project-in");
            project.classList.add("fade-project-out");
        }

        // Once projects are faded, re-add the "to-fade" class to fade back
        setTimeout(() => {
            for (const project of fadeList) {
                project.classList.add("to-fade");
                project.classList.remove("fade-project-out");
            }
        }, 200);

        // Use `selectedButton` to enable/disable relevant projects
        setTimeout(() => {
            setProjects((prevState) => {
                return prevState.map((project) => {
                    if (selectedButton.name === "All") {
                        return { ...project, enabled: true };
                    } else if (
                        project.languages.includes(selectedButton.name)
                    ) {
                        return { ...project, enabled: true };
                    } else {
                        return { ...project, enabled: false };
                    }
                });
            });
        }, 205);

        // Once projects are re-enabled, fade them back in
        setTimeout(() => {
            let fadeNode = document.querySelectorAll(".fade-selector");
            let fadeList = Array.from(fadeNode);
            for (const project of fadeList) {
                project.classList.remove("to-fade");
                project.classList.add("fade-project-in");
            }
        }, 210);
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
        <section id="other-projects">
            <SectionTitle
                title="Other Projects"
                subtitle="Personal Projects and Coursework"
            ></SectionTitle>
            <div className="fade-prep">
                <p id="filter-description">
                    Filter projects by selecting a language below:
                </p>
                <div id="language-filter">{languageComponent}</div>
                <div className="projects">{projectComponent}</div>
            </div>
        </section>
    );
}
