import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MainTitle from "../components/MainTitle";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProjects from "@/components/OtherProjects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

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
                <script
                    src="https://kit.fontawesome.com/2909939846.js"
                    crossorigin="anonymous"
                ></script>
            </Head>
            <Navbar />
            <main className={`${inter.className}`}>
                <MainTitle />
                <p className="bio">
                    I&aposm looking for a job because I would like to have one.
                    I would like to work for money. I would like to make money
                    while having fun so I can buy things I like while doing
                    things I like.
                </p>
                <Skills />
                <FeaturedProject />
                <OtherProjects />
                <Contact />
            </main>
        </>
    );
}
