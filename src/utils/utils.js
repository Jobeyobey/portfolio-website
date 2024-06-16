const handleScroll = () => {
    const navBg = document.querySelector(".nav-bg");
    const viewportHeight = window.innerHeight;

    if (window.scrollY > viewportHeight / 6) {
        navBg.classList.remove("hide-nav-bg");
    } else {
        navBg.classList.add("hide-nav-bg");
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

module.exports = { handleScroll, resizeNavBg, handleWindowResize };
