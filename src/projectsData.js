import nextConfig from "../next.config.mjs";

const projectsData = [
    {
        id: 1,
        title: "Command-Line Battle",
        subtitle: "C# Player's Guide - Final Project",
        languages: ["C#"],
        description1:
            "A command-line game, capable of Human v Human, Human v Computer and Computer v Computer gameplay.",
        description2:
            "This game is designed using Object-Oriented Programming. Object classes are used for Characters, Items, Attack Types and more. I was sure to follow the core principles of encapsulation, inheritance, polymoprhism and abstraction when making this game.",
        imgSrc: `${nextConfig.basePath}/images/Final-Battle.png`,
        imgAlt: "Animation showing the Command-Line Battle gameplay.",
        enabled: true,
    },
    {
        id: 2,
        title: "Tenzies",
        subtitle: "React Dice-Rolling Game",
        languages: ["Javascript", "React", "HTML/CSS"],
        description1:
            "The aim of the game is to have all dice showing the same number. Users can update dice state to “hold” them, then roll the remaining dice.",
        description2:
            "Built using React, it also uses cookies to track player statistics, and allows the user to change the amount of dice, as well as the game mode.",
        imgSrc: `${nextConfig.basePath}/images/GIF/React-Tenzies.gif`,
        imgAlt: "Animation showing the Tenzies gameplay.",
        enabled: true,
    },
    {
        id: 3,
        title: "Quiz App",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS", "REST API"],
        description1:
            "A quiz app made in React. A user can choose how many questions they would like, the general difficulty, and the question genre.",
        description2:
            "Using the inputs from the user, a quiz is created by fetching questions that match the input criteria from an API. Once the user has selected their answers, they can submit them and see their score.",
        imgSrc: `${nextConfig.basePath}/images/GIF/React-Quiz.gif`,
        imgAlt: "Animation showing a user playing the Quiz App game.",
        enabled: true,
    },
    {
        id: 4,
        title: "Bridge to Valhalla",
        subtitle: "Unity - Create With Code",
        languages: ["C#"],
        description1:
            "Bridge to Valhalla is a game I created in Unity as part of the Create With Code course. The player controls a single unit, defending their castle against waves of attackers.",
        description2:
            "A timer is used to slowly increase the spawnrate of the attackers, with three different enemy types based on a 'Character' class, one of which will hunt the player down. Periodically spawning health pickups allow the player to heal when they come into contact with them.",
        imgSrc: `${nextConfig.basePath}/images/GIF/Bridge-To-Valhalla.gif`,
        imgAlt: "Animation showing the Fountain of Objects Game gameplay.",
        enabled: true,
    },
    {
        id: 5,
        title: "Fountain of Objects Game",
        subtitle: "C# Players Guide - OOP Practice",
        languages: ["C#"],
        description1:
            "To gain a deeper understanding of Object-Oriented Programming, I created a game following the rules set out in the C# Players Guide book.",
        description2:
            "The player can choose between a small, medium and large map, which consists of a grid. They move through the grid by inputting console commands, receiving information about their current and adjacent cells. They can kill monsters, avoid pits, and eventually enable the Fountain of Objects. Once this condition has been enabled, they can escape by returning to the start.",
        imgSrc: `${nextConfig.basePath}/images/GIF/Fountain-of-Objects.gif`,
        imgAlt: "Animation showing the Fountain of Objects Game gameplay.",
        enabled: true,
    },
    {
        id: 6,
        title: "Meme Generator",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1:
            "Using React, a user is able to use forms to input text that they would like to place on a random meme image.",
        description2:
            "When 'generate meme' is clicked, an image is fetched asynchronously from a database, and the text is displayed on top.",
        imgSrc: `${nextConfig.basePath}/images/GIF/Meme-Generator.gif`,
        imgAlt: "A meme of 3 monkeys on a sofa, with the caption 'when you decide to start learning programming'.",
        enabled: true,
    },
    {
        id: 7,
        title: "Dark Mode",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1:
            "Using React State to enable/disable a dark mode for a website.",
        description2: null,
        imgSrc: `${nextConfig.basePath}/images/GIF/React-Dark-Mode.gif`,
        imgAlt: "Animation showing an app switching between light and dark mode.",
        enabled: true,
    },
    {
        id: 8,
        title: "Portfolio Website",
        subtitle: "This one may be familiar",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1:
            "This website is made using React. It is responsive and is viewable on all device sizes.",
        description2:
            "I was sure to follow accessibility guidelines, using ARIA labels to hide decorative elements from screen readers and add additional information to buttons. I designed the projects section in a way that I can easily add new projects in future as and when I complete them.",
        imgSrc: `${nextConfig.basePath}/images/Portfolio.png`,
        imgAlt: "Animation showing this website.",
        enabled: true,
    },
    {
        id: 9,
        title: "Homepage Project",
        subtitle: "CS50x Project",
        languages: ["HTML/CSS"],
        description1:
            "To practice HTML/CSS I was tasked with creating a simple website consisting of several pages. I decided to make a light version of the Overwatch website.",
        description2:
            "Using Bootstrap, I created several carousel banners. I also implemented a filter to filter heroes by their role. The website is responsive and can be viewed on both desktop and mobile.",
        imgSrc: `${nextConfig.basePath}/images/GIF/CS50-Webpage.gif`,
        imgAlt: "Animation showing a website about the Overwatch 2 videogame.",
        enabled: true,
    },
    {
        id: 10,
        title: "The Boardgame Companion",
        subtitle: "Personal Project",
        languages: ["Python", "HTML/CSS", "JavaScript", "SQL", "REST API"],
        description1:
            "The Boardgame Companion is a web-app that allows users to track and share their boardgame collection and gameplay statistics with their friends.",
        description2:
            "It uses Python as a back-end, storing user data in an SQL database. The front-end uses the Flask framework.",
        imgSrc: `${nextConfig.basePath}/images/Boardgame-Companion.png`,
        imgAlt: "Animation showing The Boardgame Companion.",
        enabled: true,
    },
];

export default projectsData;
