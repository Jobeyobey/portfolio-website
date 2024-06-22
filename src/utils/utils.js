const handleScroll = () => {
    /* Nav scroll */
    checkNavBg();
    checkActiveLinkPos();

    /* Fade-in Animations */
    let revealList = getRevealList();
    checkReveal(revealList);
};

const checkNavBg = () => {
    const navBg = document.querySelector(".nav-bg");

    if (window.scrollY > 0) {
        navBg.classList.remove("hide-nav-bg");
    }
};

const getRevealList = () => {
    const fadePrepList = document.querySelectorAll(".fade-prep");
    const titlePrepList = document.querySelectorAll(".section-title-hidden");
    const underscorePrepList = document.querySelectorAll(
        ".section-underscore-hidden"
    );

    const fadeList = Array.from(fadePrepList);
    const titleList = Array.from(titlePrepList);
    const underscoreList = Array.from(underscorePrepList);

    const revealList = fadeList.concat(titleList.concat(underscoreList));

    return revealList;
};

const checkReveal = (revealList) => {
    const viewportHeight = window.innerHeight;
    if (revealList.length !== 0) {
        for (const element of revealList) {
            if (element.offsetTop < window.scrollY + viewportHeight / 1.4) {
                if (element.classList.contains("section-title-hidden")) {
                    element.classList.remove("section-title-hidden");
                } else if (
                    element.classList.contains("section-underscore-hidden")
                ) {
                    element.classList.remove("section-underscore-hidden");
                } else {
                    setTimeout(() => {
                        element.classList.remove("fade-prep");
                        element.classList.add("fade-in");
                    }, 200);
                }
            }
        }
    }
};

const resizeNavBg = () => {
    const navBg = document.querySelector(".nav-bg");
    const navBarHeight = document.querySelector(".nav-bar").offsetHeight;
    navBg.style.height = `${navBarHeight}px`;
};

const handleWindowResize = () => {
    resizeNavBg();
};

const throttle = (func, delay) => {
    let time = Date.now();

    return () => {
        if (time + delay - Date.now() <= 0) {
            func();
            time = Date.now();
        }
    };
};

function checkActiveLinkPos() {
    const aboutSection = document.getElementById("about");
    const skillsSection = document.getElementById("skills");
    const projectSection = document.getElementById("featured-project");
    const contactSection = document.getElementById("contact");

    const skillsSectionPos = skillsSection.offsetTop;
    const projectSectionPos = projectSection.offsetTop;
    const contactSectionPos = contactSection.offsetTop;

    const sectionsArr = [
        aboutSection,
        skillsSection,
        projectSection,
        contactSection,
    ];

    if (contactSectionPos < window.scrollY + 500) {
        updateNavLinks(contactSection, sectionsArr);
    } else if (projectSectionPos < window.scrollY + 250) {
        updateNavLinks(projectSection, sectionsArr);
    } else if (skillsSectionPos < window.scrollY + 250) {
        updateNavLinks(skillsSection, sectionsArr);
    } else {
        updateNavLinks(aboutSection, sectionsArr);
    }
}

function updateNavLinks(activeSection, sectionsArr) {
    for (const section of sectionsArr) {
        if (activeSection === section) {
            document
                .getElementById(`#${activeSection.id}`)
                .classList.remove("inactive-nav-link");
            document
                .getElementById(`#${activeSection.id}`)
                .classList.add("active-nav-link");
        } else if (activeSection !== section) {
            document
                .getElementById(`#${section.id}`)
                .classList.remove("active-nav-link");
            document
                .getElementById(`#${section.id}`)
                .classList.add("inactive-nav-link");
        }
    }
}

module.exports = {
    handleScroll,
    resizeNavBg,
    handleWindowResize,
    getRevealList,
    checkReveal,
    checkNavBg,
    throttle,
};
