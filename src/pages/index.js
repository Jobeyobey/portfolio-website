import React from "react";
import Head from "next/head";
import MainTitle from "../components/MainTitle";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProjects from "@/components/OtherProjects";
import Contact from "@/components/Contact";
import StarSky from "@/components/StarSky";
import {
    handleScroll,
    resizeNavBg,
    handleWindowResize,
    getFadeList,
    checkFade,
    checkNavBg,
} from "../utils/utils.js";

export default function Home() {
    React.useEffect(() => {
        checkNavBg();
        resizeNavBg();
        const fadeList = getFadeList();
        checkFade(fadeList);

        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <>
            <Head>
                <title>Joe Hollands - Portfolio</title>
                <meta
                    name="description"
                    content="Joe Hollands Junior Software Developer Portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <header>
                <Navbar />
                <div className="nav-bg hide-nav-bg"></div>
                <MainTitle />
            </header>
            <main>
                <Skills />
                <FeaturedProject />
                <OtherProjects />
                <Contact />
                {/* <Footer /> */}
                <StarSky />
            </main>
        </>
    );
}
