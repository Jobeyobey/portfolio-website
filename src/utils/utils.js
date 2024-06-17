const handleScroll = () => {
    /* Nav scroll */
    checkNavBg();

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
            if (element.offsetTop < window.scrollY + viewportHeight / 1.5) {
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

function markActiveLink() {
    // Timeout gives time to read URL. Without it, active link isn't udpated on click
    setTimeout(() => {
        const navLinks = {
            about: "#about",
            skills: "#skills",
            projects: "#featured-project",
            contact: "#contact",
        };

        const url = window.location.href;
        const pageRegEx = /#.+/g;
        const page = url.match(pageRegEx);
        const activeLink = document.getElementById(page);

        if (page !== null) {
            for (const key in navLinks) {
                if (navLinks[key] === page[0]) {
                    activeLink.classList.add("active-nav-link");
                } else {
                    const tempLink = document.getElementById(navLinks[key]);
                    tempLink.classList.remove("active-nav-link");
                }
            }
        }
    }, 1);
}

module.exports = {
    handleScroll,
    resizeNavBg,
    handleWindowResize,
    getRevealList,
    checkReveal,
    checkNavBg,
    throttle,
    markActiveLink,
};
