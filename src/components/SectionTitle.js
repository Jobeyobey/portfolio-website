export default function SectionTitle(props) {
    return (
        <div className="section-title-container">
            <div className="titles-mask">
                <h2 className={"section-title section-title-hidden"}>
                    {props.title}
                </h2>
                <h3 className={"section-subtitle section-title-hidden"}>
                    {props.subtitle}
                </h3>
            </div>
            <hr
                className="section-underscore section-underscore-hidden"
                aria-hidden="true"
            ></hr>
        </div>
    );
}
