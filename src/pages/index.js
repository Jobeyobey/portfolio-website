import Head from "next/head";
import Image from "next/image";
import MainTitle from "../components/MainTitle";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProjects from "@/components/OtherProjects";
import Contact from "@/components/Contact";

export default function Home() {
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
            <Navbar />
            <main>
                <MainTitle />
                <Skills />
                <FeaturedProject />
                <OtherProjects />
                <Contact />
                {/* <Footer /> */}
            </main>
        </>
    );
}
