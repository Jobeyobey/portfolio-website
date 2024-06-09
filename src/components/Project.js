import Image from "next/image";

export default function Project(props) {
    const languages = props.languages.map((languages, index) => {
        return <p key={index}>{languages}</p>;
    });

    const isDescription2 = props.description2 !== undefined;

    console.log(props.imgSrc + " HERE");

    return (
        <>
            <div className="project-title-container">
                <h3 className={"project-title"}>{props.title}</h3>
                <h4>{props.subtitle}</h4>
                <hr className="project-underscore"></hr>
                {languages}
            </div>
            <p>{props.description1}</p>
            {isDescription2 && <p>{props.description2}</p>}
            <a className="site-link" href="#" alt="#">
                Github
            </a>
            <Image
                src={require("../images/placeholder-320-300.svg")}
                width={320}
                height={300}
                alt="#"
            />
        </>
    );
}
