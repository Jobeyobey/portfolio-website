import Image from "next/image";

export default function Project(props) {
    const languageToClass = {
        "c#": "csharp",
        "html/css": "htmlcss",
        "rest api": "restapi",
    };
    const languages = props.languages.map((language, index) => {
        // Ensure language class is valid for CSS names
        let languageClass = language.toLowerCase();
        if (languageToClass.hasOwnProperty(languageClass)) {
            languageClass = languageToClass[languageClass];
        }

        return (
            <div key={index} className={`language-container ${languageClass}`}>
                <p>{language}</p>
            </div>
        );
    });

    const isDescription2 = props.description2 !== undefined;

    return (
        <>
            <div className="project-container">
                <div className="project-description-container">
                    <h3 className="project-title">{props.title}</h3>
                    <h4 className="project-subtitle">{props.subtitle}</h4>
                    <hr className="project-underscore"></hr>
                    <div className="project-languages">{languages}</div>
                    <p className="project-description">{props.description1}</p>
                    {isDescription2 && (
                        <p className="project-description">
                            {props.description2}
                        </p>
                    )}
                    <a className="site-link" href="#" alt="#">
                        Github
                    </a>
                </div>
                <Image
                    src="/images/placeholder-320-300.svg"
                    width={320}
                    height={300}
                    alt="#"
                />
            </div>
        </>
    );
}
