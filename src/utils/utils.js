const handleScroll = () => {
    /* Nav scroll */
    checkNavBg();

    /* Fade-in Animations */
    let fadeList = getFadeList();
    checkFade(fadeList);
};

const checkNavBg = () => {
    const navBg = document.querySelector(".nav-bg");

    if (window.scrollY > 0) {
        navBg.classList.remove("hide-nav-bg");
    }
};

const getFadeList = () => {
    const fadePrepList = document.querySelectorAll(".fade-prep");

    const fadeList = Array.from(fadePrepList);

    return fadeList;
};

const checkFade = (fadeList) => {
    const viewportHeight = window.innerHeight;
    if (fadeList.length !== 0) {
        for (const element of fadeList) {
            if (element.offsetTop < window.scrollY + viewportHeight / 1.5) {
                element.classList.remove("fade-prep");
                element.classList.add("fade-in");
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

module.exports = {
    handleScroll,
    resizeNavBg,
    handleWindowResize,
    getFadeList,
    checkFade,
    checkNavBg,
};
