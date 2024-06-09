export default function SectionTitle(props) {
    return (
        <div className="section-title-container">
            <h2 className={"section-title"}>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <hr className="section-underscore"></hr>
        </div>
    );
}
