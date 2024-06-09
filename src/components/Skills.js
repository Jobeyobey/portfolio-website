import SectionTitle from "./SectionTitle";

export default function Skills() {
    return (
        <section>
            <SectionTitle
                title="Skills and Experience"
                subtitle="I intend to use these to pay the bills"
            />
            <div className="skill-boxes-container">
                <div className="skill-box">
                    <h4>Coding</h4>
                </div>
                <div className="skill-box">
                    <h4>Personal</h4>
                </div>
                <div className="skill-box">
                    <h4>Experience</h4>
                </div>
            </div>
        </section>
    );
}
