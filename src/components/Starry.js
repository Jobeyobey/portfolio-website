import React from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";

// const ROOT_NODE = document.querySelector("#app");

export default function Starscape({
    densityRatio = 0.2,
    sizeLimit = 3,
    defaultAlpha = 0.5,
}) {
    const canvasRef = React.useRef(null);
    const contextRef = React.useRef(null);
    const starsRef = React.useRef(null);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function LOAD() {
        const VMIN = Math.min(window.innerHeight * 2, window.innerWidth);
        const STAR_COUNT = Math.floor(VMIN * densityRatio);
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight * 2;
        starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
            x: gsap.utils.random(0, window.innerWidth, 1),
            y: gsap.utils.random(0, window.innerHeight, 1),
            size: gsap.utils.random(1, sizeLimit, 1),
            scale: 1,
            speed: getRandomInt(0, 2),
            alpha: gsap.utils.random(0.1, defaultAlpha, 0.1),
        }));
    }

    function RENDER() {
        contextRef.current.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );
        starsRef.current.forEach((star) => {
            contextRef.current.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`; // Colour star
            contextRef.current.beginPath();
            contextRef.current.arc(
                star.x, // xPos
                star.y, // yPos
                star.size / 2, // Size
                0, // Scale
                Math.PI * 2 // Alpha
            );
            contextRef.current.fill();
        });
    }

    // Load and render stars
    function RUN() {
        LOAD();
        RENDER();
    }

    React.useEffect(() => {
        contextRef.current = canvasRef.current.getContext("2d");

        RUN();

        // ReRUN on resize
        window.addEventListener("resize", RUN);
        return () => {
            window.removeEventListener("resize", RUN);
        };
    }, [0]);

    function moveStars() {
        for (let star of starsRef.current) {
            if (star.x + star.speed > window.innerWidth) {
                star.x = 0;
            } else {
                star.x += star.speed;
            }
            RENDER();
        }
    }

    React.useEffect(() => {
        const interval = setInterval(() => moveStars(), 66);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <button onClick={moveStars}>TEST</button>
            <div class="canvasContainer">
                <canvas ref={canvasRef} />
            </div>
        </>
    );
}
