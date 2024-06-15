const projectsData = [
    {
        id: 0,
        title: "Command-Line Battle",
        subtitle: "C# Player's Guide - Final Project",
        languages: ["C#"],
        description1:
            "A command-line game, capable of Human v Human, Human v Computer and Computer v Computer gameplay.",
        description2:
            "This game is designed using Object-Oriented Programming. Object classes are used for Characters, Items, Attack Types and more.",
        imgSrc: "/images/placeholder/Final-Battle.png",
        imgAlt: "#",
        enabled: true,
    },
    {
        id: 1,
        title: "Tenzies",
        subtitle: "React Dice-Rolling Game",
        languages: ["Javascript", "React", "HTML/CSS"],
        description1:
            "The aim of the game is to have all dice showing the same number. Users can “hold” dice, then roll the remaining dice.",
        description2:
            "Built using React, it also uses cookies to track player statistics, and allows the user to change the amount of dice, as well as the game mode.",
        imgSrc: "/images/placeholder/Tenzies.png",
        imgAlt: "#",
        enabled: false,
    },
    {
        id: 2,
        title: "The Boardgame Companion",
        subtitle: "Personal Project",
        languages: ["Python", "HTML/CSS", "JavaScript", "SQL", "REST API"],
        description1:
            "The Boardgame Companion is a web-app that allows users to track and share their boardgame collection and gameplay statistics with their friends.",
        description2:
            "It uses Python as a back-end, storing user data in an SQL database. The front-end uses the Flask framework.",
        imgSrc: "/images/placeholder/Boardgame-Companion.png",
        imgAlt: "#",
        enabled: false,
    },
    {
        id: 3,
        title: "Homepage Project",
        subtitle: "CS50x Project",
        languages: ["HTML/CSS"],
        description1:
            "To practice HTML, CSS and some simple CSS packages, I was tasked with creating a simple website consisting of several pages. I decided to make a light version of the Overwatch website.",
        description2:
            "Using Bootstrap, I created several carousel banners. I also created a filter so that users can filter heros by their role. The website is responsive and can be viewed on both desktop and mobile.",
        imgSrc: "/images/placeholder/CS50-Webpage.png",
        imgAlt: "#",
        enabled: false,
    },
    {
        id: 4,
        title: "Fountain of Objects Game",
        subtitle: "C# Players Guide - OOP Practice",
        languages: ["C#"],
        description1:
            "To gain a deeper understanding of Object-Oriented Programming, I created a game following the rules set out in the C# Players Guide book.",
        description2:
            "The player can choose between a small, medium and large map, which consists of a grid. They must search the grid by inputting console commands, receiving information about their current and adjacent cells. They can kill monsters, avoid pits, and eventually enable the Fountain of Objects. Once they have done this, they can escape by returning to the start.",
        imgSrc: "/images/placeholder/Final-Battle.png",
        imgAlt: "#",
        enabled: true,
    },
    {
        id: 5,
        title: "Meme Generator",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1:
            "Using React, a user is able to use forms to input text that they would like to place on a random meme image.",
        description2:
            "When 'generate meme' is clicked, an image is fetched asynchronously from a database, and the input text is displayed on top.",
        imgSrc: "/images/placeholder/React-Meme-Generator.png",
        imgAlt: "#",
        enabled: false,
    },
    {
        id: 6,
        title: "Dark Mode",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1:
            "Using React State to enable/disable a dark mode for a website.",
        description2: null,
        imgSrc: "/images/placeholder/Desktop-Portfolio-Dark.png",
        imgAlt: "#",
        enabled: false,
    },
    {
        id: 7,
        title: "Quiz App",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS", "REST API"],
        description1:
            "A quiz app made in React. A user can choose how many questions they would like, the general difficulty, and the question genre.",
        description2:
            "Using the inputs from the user, a quiz is created by fetching questions that match the input criteria from a database. Once the user has selected their answers, they can submit them and see their score.",
        imgSrc: "/images/placeholder/React-Quiz-App.png",
        imgAlt: "#",
        enabled: false,
    },
    {
        id: 8,
        title: "Portfolio Website",
        subtitle: "This one may be familiar",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1: "Of course, this website.",
        description2:
            "I'm sure I can come up with some decent information to write here.",
        imgSrc: "/images/placeholder/Desktop-Portfolio-Dark.png",
        imgAlt: "#",
        enabled: false,
    },
];

export default projectsData;
