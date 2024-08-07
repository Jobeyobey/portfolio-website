import SectionTitle from "./SectionTitle";

export default function Skills() {
    return (
        <section id="skills" tabIndex="0" aria-label="Skills Section">
            <SectionTitle
                title="Skills and Experience"
                subtitle="Work, Coding and Personal"
            />
            <div className="fade-prep">
                <div className="skill-boxes-container">
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
                    <div className="skill-box coding-border">
                        <h4>Coding</h4>
                        <h5 className="skill-title">Languages</h5>
                        <p className="skill-description">
                            C# • Python • SQL • Javascript • HTML/CSS
                        </p>
                        <h5 className="skill-title">Libraries/Frameworks</h5>
                        <p className="skill-description">
                            React • Express• Jest • Supertest • Flask
                        </p>
                        <h5 className="skill-title">Other</h5>
                        <p className="skill-description">
                            Git • Rest API&apos;s • Test-Driven Development •
                            Error Handling • Accessibility • Hosting • Agile •
                            Pair Programming
                        </p>
                    </div>
                    <div className="skill-box experience-border">
                        <h4>Experience</h4>
                        <h5 className="skill-title">Graphic Design</h5>
                        <p className="skill-subtitle">2017-2024</p>
                        <p className="skill-description">
                            UI • Workflow creation/automation • Leading on
                            projects • Liaising with brands and clients •
                            Training new hires
                        </p>
                        <h5 className="skill-title">
                            Edit Support Coordinator
                        </h5>
                        <p className="skill-subtitle">2016-2017</p>
                        <p className="skill-description">
                            On-location data wrangling • Server Management •
                            Troubleshooting • Technical QC • Timekeeping •
                            Documentation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
