import SectionTitle from "./SectionTitle";

export default function Skills() {
    return (
        <section id="skills" className="fade-prep">
            <SectionTitle
                title="Skills and Experience"
                subtitle="I intend to use these to pay the bills"
            />
            <div className="skill-boxes-container">
                <div className="skill-box experience-border">
                    <h4>Experience</h4>
                    <h5 className="job-title">Graphic Design</h5>
                    <p className="job-date">2017-2024</p>
                    <p className="job-description">
                        UI • Workflow creation/automation • Leading on projects
                        • Liaising with brands and clients • Training new hires
                    </p>
                    <h5 className="job-title">Edit Support Coordinator</h5>
                    <p className="job-date">2016-2017</p>
                    <p className="job-description">
                        On-location data wrangling • Server Management •
                        Troubleshooting • Technical QC • Timekeeping •
                        Documentation
                    </p>
                </div>
                <div className="skill-box coding-border">
                    <h4>Coding</h4>
                    <ul className={"skill-list"}>
                        <li>C#</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                        <li>React</li>
                        <li>Flast</li>
                        <li>Git</li>
                        <li>Rest API&apos;s</li>
                    </ul>
                </div>
                <div className="skill-box personal-border">
                    <h4>Personal</h4>
                    <ul className="skill-list">
                        <li>Technical</li>
                        <li>Fast Learner</li>
                        <li>Self-Motivated</li>
                        <li>Team Player</li>
                        <li>Adaptable</li>
                        <li>Patient</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
