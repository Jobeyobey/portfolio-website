import Image from "next/image";
import { useEffect } from "react";

export default function Project(props) {
    const languageToClass = {
        "c#": "csharp",
        "html/css": "htmlcss",
        "rest api": "restapi",
    };

    let classString = "project-container";

    const languages = props.languages.map((language, index) => {
        // Ensure language class is valid for CSS names
        let languageClass = language.toLowerCase();
        if (languageToClass.hasOwnProperty(languageClass)) {
            languageClass = languageToClass[languageClass];
        }

        classString += ` ${languageClass}-project`;

        return (
            <div key={index} className={`language-container ${languageClass}`}>
                <p className="project-language">{language}</p>
            </div>
        );
    });

    useEffect(() => {
        function supportsVideoType(type) {
            const videoTest = document.createElement("video");
            return videoTest.canPlayType("video/webm");
        }
        if (supportsVideoType === "") {
            supportsWebM = false;
        }
    });

    const isDescription2 = props.description2 !== undefined;
    const isGitLink = props.github !== undefined;
    const isSiteLink = props.siteLink !== "";
    let supportsWebM = true;

    return (
        <div className={classString}>
            <div className="project-description-container fade-project-in fade-selector">
                <h3 className="project-title">{props.title}</h3>
                <h4 className="project-subtitle">{props.subtitle}</h4>
                <hr className="project-underscore" aria-hidden="true"></hr>
                <div
                    className="project-languages"
                    aria-label="List of languages this project uses"
                >
                    {languages}
                </div>
                <p className="project-description">{props.description1}</p>
                {isDescription2 && (
                    <p className="project-description">{props.description2}</p>
                )}
                {isSiteLink && (
                    <a
                        className="site-link"
                        href={props.siteLink}
                        target="_blank"
                        aria-label={props.title}
                    >
                        View Site
                    </a>
                )}
                {isGitLink && (
                    <a
                        className="site-link"
                        href={props.github}
                        aria-label={`Github Repository for ${props.title} `}
                        target="_blank"
                    >
                        Github
                    </a>
                )}
            </div>
            {props.isVideo && supportsWebM ? (
                <video
                    muted
                    width="310"
                    height="300"
                    preload="auto"
                    playsInline
                    autoPlay
                    loop
                    className="project-video fade-project-in fade-selector"
                    aria-label={props.imgAlt}
                >
                    <source src={props.imgSrc} type="video/webm"></source>
                </video>
            ) : (
                <Image
                    src={props.imgSrc}
                    width={320}
                    height={300}
                    alt={props.imgAlt}
                    className="project-image fade-project-in fade-selector"
                />
            )}
        </div>
    );
}
