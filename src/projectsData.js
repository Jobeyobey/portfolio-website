import nextConfig from "../next.config.mjs";

const projectsData = [
    {
        id: 1,
        isFeature: false,
        title: "Party Battler",
        subtitle: "C# Player's Guide",
        languages: ["C#"],
        description1:
            "A 'hero' party must defeat several increasingly difficult enemy parties to win. Both parties are capable of either human or computer control. Characters can attack, equip items, use items or even steal from other characters. Computer players are capable of deciding which items will be effective to use depending on game conditions.",
        description2:
            "Designed using Object-Oriented Programming, I was sure to follow the core principles of encapsulation, inheritance, polymorphism and abstraction, as well as SOLID principles.",
        vidSrc: "",
        imgSrc: `${nextConfig.basePath}/images/Final-Battle.png`,
        imgAlt: "Image of the Command-Line Battle gameplay.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: false,
        siteLink: "",
        github: "https://github.com/Jobeyobey/C-Players-Guide-Part-4-The-End-Game",
        enabled: true,
    },
    {
        id: 2,
        isFeature: false,
        title: "News API",
        subtitle: "Northcoders Backend Project",
        languages: ["Javascript", "Express", "SQL", "REST API"],
        description1:
            "This is a news API that allows you to host a database of articles and their comments. It uses Express for routing and error handling, and PostgreSQL as the RDBMS. It has a full testing suite with nearly 100 tests, and is protected against SQL injection.",
        description2:
            "Note: Hosted on Render.com, it may take 30 seconds for the first query to respond while the server boots after a short period of inactivity.",
        vidSrc: "",
        imgSrc: `${nextConfig.basePath}/images/NC-White-BG.png`,
        imgAlt: "Northcoders Logo on white background.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: false,
        siteLink: "https://be-nc-news-q2go.onrender.com/api",
        github: "https://github.com/Jobeyobey/be-nc-news/tree/main",
        enabled: true,
    },
    {
        id: 3,
        isFeature: false,
        title: "Bridge to Valhalla",
        subtitle: "Unity - Create With Code",
        languages: ["C#"],
        description1:
            "Bridge to Valhalla is a game I created in Unity as part of the Create With Code course. The player controls a single unit, defending their castle against waves of attackers.",
        description2:
            "A timer is used to slowly increase the spawnrate of the attackers, with three different enemy types based on a 'Character' class, one of which will hunt the player down. Periodically spawning health pickups allow the player to heal when they come into contact with them.",
        vidSrc: `${nextConfig.basePath}/images/WEBM/Bridge-To-Valhalla.webm`,
        imgSrc: `${nextConfig.basePath}/images/GIF/Bridge-To-Valhalla.gif`,
        imgAlt: "Animation showing the Bridge to Valhalla Game gameplay.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: true,
        siteLink: "",
        github: "https://github.com/Jobeyobey/Create-With-Code---Personal-Project",
        enabled: true,
    },
    {
        id: 4,
        isFeature: false,
        title: "Tenzies",
        subtitle: "React Dice-Rolling Game",
        languages: ["Javascript", "React", "HTML/CSS"],
        description1:
            "The aim of the game is to have all dice showing the same number. Users can update dice state to “hold” them, then roll the remaining dice.",
        description2:
            "Built using React, it also uses cookies to track player statistics. The user can change the amount of dice, as well as the game mode. Different player statistics are saved for each combination of dice/game mode.",
        vidSrc: `${nextConfig.basePath}/images/WEBM/React-Tenzies.webm`,
        imgSrc: `${nextConfig.basePath}/images/GIF/React-Tenzies.gif`,
        imgAlt: "Animation showing the Tenzies gameplay.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: true,
        siteLink: "",
        github: "https://github.com/Jobeyobey/scrimba-react-tenzies-app",
        enabled: true,
    },
    {
        id: 5,
        isFeature: false,
        title: "Quiz App",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS", "REST API"],
        description1:
            "A quiz app made in React. A user can choose how many questions they would like, the general difficulty, and the question genre.",
        description2:
            "Using the inputs from the user, a quiz is created by fetching questions that match the input criteria from an API. Once the user has selected their answers, they can submit them and see their score.",
        vidSrc: `${nextConfig.basePath}/images/WEBM/React-Quiz.webm`,
        imgSrc: `${nextConfig.basePath}/images/GIF/React-Quiz.gif`,
        imgAlt: "Animation showing a user playing the Quiz App game.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: true,
        siteLink: "",
        github: "https://github.com/Jobeyobey/scrimba-react-quiz-app",
        enabled: true,
    },
    {
        id: 6,
        isFeature: false,
        title: "Homepage Project",
        subtitle: "CS50x Project",
        languages: ["HTML/CSS"],
        description1:
            "To practice HTML/CSS I, I created a simple website consisting of several pages. I decided to make a light version of the Overwatch website.",
        description2:
            "I implemented a filter to filter heroes by their role, and I created several carousel banners using Bootstrap. The website is responsive and can be viewed on both desktop and mobile.",
        vidSrc: `${nextConfig.basePath}/images/WEBM/CS50-Webpage.webm`,
        imgSrc: `${nextConfig.basePath}/images/GIF/CS50-Webpage.gif`,
        imgAlt: "Animation showing a website about the Overwatch 2 videogame.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: true,
        siteLink: "",
        github: "https://github.com/Jobeyobey/CS50-Homepage-Project",
        enabled: true,
    },
    {
        id: 7,
        isFeature: false,
        title: "Portfolio Website",
        subtitle: "This one may be familiar",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1:
            "This website is made using React. It is responsive and is viewable on all device sizes.",
        description2:
            "I was sure to follow accessibility guidelines, using ARIA labels to hide decorative elements from screen readers and add additional information to buttons. I designed the projects section in a way that I can easily add new projects in future as and when I complete them.",
        vidSrc: "",
        imgSrc: `${nextConfig.basePath}/images/Portfolio.png`,
        imgAlt: "Screenshot of the landing area of this website.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: false,
        siteLink: "",
        github: "https://github.com/Jobeyobey/portfolio-website",
        enabled: true,
    },
    {
        id: 8,
        isFeature: true,
        title: "The Boardgame Companion",
        subtitle: "Personal Project",
        languages: ["Python", "HTML/CSS", "JavaScript", "SQL", "REST API"],
        description1:
            "The Boardgame Companion is a web-app that allows users to track and share their boardgame collection and gameplay statistics with their friends.",
        description2:
            "User data is stored and fetched from an SQL database. The board game search uses the Boardgame Geek API, filtering out expansions and other products to only show relevant results.",
        vidSrc: "",
        imgSrc: `${nextConfig.basePath}/images/Boardgame-Companion-Other.png`,
        imgAlt: "Screenshot of The Boardgame Companion.",
        featureImgSrc: `${nextConfig.basePath}/images/Featured-Project.png`,
        featuredImgAlt:
            "A laptop and mobile displaying The Boardgame Companion",
        isVideo: false,
        siteLink: "http://jobeyobey.pythonanywhere.com/login",
        github: "https://github.com/Jobeyobey/cs50-final-project",
        enabled: true,
    },
    {
        id: 9,
        isFeature: false,
        title: "Meme Generator",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1:
            "Using React, a user is able to use forms to input text that they would like to place on a random meme image.",
        description2:
            "When 'generate meme' is clicked, an image is fetched asynchronously from a database, and the text is displayed on top.",
        vidSrc: `${nextConfig.basePath}/images/WEBM/Meme-Generator.webm`,
        imgSrc: `${nextConfig.basePath}/images/GIF/Meme-Generator.gif`,
        imgAlt: "Animation showing two memes being generated. Meme 1 is a slightly mad looking man struggling to exlain a mess, captioned 'When you try to explain your first project'. Meme 2 is an old lady looking closely at her screen, captioned 'Trying to find the missing bracket'.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: true,
        siteLink: "",
        github: undefined,
        enabled: true,
    },
    {
        id: 10,
        isFeature: false,
        title: "Fountain of Objects Game",
        subtitle: "C# Players Guide - OOP Practice",
        languages: ["C#"],
        description1:
            "To gain a deeper understanding of Object-Oriented Programming, I created a game following the rules set out in the C# Players Guide book.",
        description2:
            "The player can choose between a small, medium and large map, which consists of a grid. They move through the grid by inputting console commands, receiving information about their current and adjacent cells. They can kill monsters, avoid pits, and eventually enable the Fountain of Objects. Once this condition has been enabled, they can escape by returning to the start.",
        vidSrc: "",
        imgSrc: `${nextConfig.basePath}/images/Fountain-of-Objects.png`,
        imgAlt: "Animation showing the Fountain of Objects Game gameplay.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: false,
        siteLink: "",
        github: undefined,
        enabled: true,
    },
    {
        id: 11,
        isFeature: false,
        title: "Dark Mode",
        subtitle: "React Practice",
        languages: ["React", "JavaScript", "HTML/CSS"],
        description1:
            "Using React State to enable/disable a dark mode for a website.",
        description2: undefined,
        vidSrc: "",
        imgSrc: `${nextConfig.basePath}/images/GIF/React-Dark-Mode.gif`,
        imgAlt: "Animation showing an app switching between light and dark mode.",
        featureImgSrc: "",
        featuredImgAlt: "",
        isVideo: false,
        siteLink: "",
        github: undefined,
        enabled: true,
    },
];

export default projectsData;
