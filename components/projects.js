const projects = [
    {
        id: 0,
        title: 'Penguin Wars - 3D Strategy Game',
        desc: `A 3D Turn-based strategy game developed for the UW TRI-CAMPUS GAME JAM 2021`,
        pageDesc: 'Penguin Wars is a 3D turn-based strategy game created for the UW TRI-CAMPUS GAME JAM 2021. This gaming masterpiece utilizes the Unity engine and the power of C# to bring a world of penguin warfare to life. Immerse yourself in a whimsical realm where adorable penguins engage in turn based battles, all rendered with Unity 3D graphics. Dive into this strategic adventure today and experience the thrill of commanding a penguin army in a quest for victory.',
        imagePath: "/images/projects/penguinwar.png",
        link1: '',
        link2: 'https://kylevh.itch.io/penguin-wars',
        categories: ['Unity', 'C#', '3D']
    },
    {
        id: 1,
        title: 'iMessage Autoresponder',
        desc: `A Python script that interacts and reads your iOS messages, enabling real-time automated responses during your absence`,
        pageDesc: `iMSG Autorespond is an script designed to simplify your digital communication when you're on the go. This tool automatically reads and responds to text messages sent through iMessage on your laptop. You'll need both macOS and an iPhone, but the convenience it offers is worth it. With iMSG Autorespond, you gain seamless access to your entire text message history and are instantly notified when you receive new messages and can be expanded to do all kinds of things based on this barebones script. It's a smart and efficient way to stay connected, even when you can't be right there to respond.`,
        imagePath: "/images/projects/kh.png",
        link1: 'https://github.com/kylevh/imsg-autorespond',
        link2: '',
        categories: ['Python', 'AppleScript']
    },
    {
        id: 2,
        title: 'SimplyTasks',
        desc: `A basic web app that helps manage your tasks utilizing MongoDB for storing data and user authentication`,
        pageDesc: 'SimplyTasks is a web application designed to simplify task management. It offers an intuitive and user-friendly interface to help you organize and prioritize your tasks effectively. The application utilizes MongoDB as its database, ensuring robust data storage and retrieval capabilities. Additionally, user authentication is implemented to provide a secure and personalized experience for each user.',
        imagePath: "/images/projects/simplytasks.png",
        link1: '',
        link2: 'https://simplytasks.herokuapp.com',
        categories: ['Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Bootstrap']
    },
    {
        id: 3,
        title: 'CorpseBound - 2D Video Game',
        desc: 'A 2D-graphics video game developed in Unity, featuring unique gameplay mechanics revolving around death',
        pageDesc: `CorpseBound is a project that emerged from the creative talents of a few UW students. In the game, players embark on a unique journey that delves into the intriguing theme of mortality. As a player, you navigate a mysterious world where death is not the end but a means to explore inaccessible areas of the map. CorpseBound encompasses a range of skills, including game design, programming, and 2D graphics, making it a standout in the 2021 UW Game Jam`,
        imagePath: "/images/projects/corpsebound.png",
        link1: 'https://github.com/kylevh/CorpseBound',
        link2: 'https://kylevh.itch.io/corpsebound',
        categories: ['Unity', 'C#', '2D Graphics']
    },
    {
        id: 4,
        title: 'Course Evaluation Catalog',
        desc: 'A UI/UX prototype of a web platform to help empower college students to make informed course selections',
        pageDesc: 'The Course Evaluation Catalog is a user-friendly platform designed to assist college students in making informed decisions about their course selections. It provides easy access to evaluations of previous college courses, allowing students to explore ratings for course materials and instructor effectiveness.  While this project is currently a UI/UX prototype, we take pride in our collaborative efforts and user-focused approach and hope to expand on this in the future',
        imagePath: "/images/projects/courseeval.png",
        link1: 'https://github.com/bailey-marie-schuler/UWB-Spring-2021-Hackathon',
        link2: 'https://devpost.com/software/university-of-washington-course-evaluation-catalog',
        categories: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 5,
        title: 'Personal Website V2',
        desc: 'A platform to display my projects and designs, which you are currently viewing. Created using NextJS 13 and deployed using Vercel',
        pageDesc: 'This dynamic website is built with Next.js 13, harnessing the power of modern web development tools. It not only serves as a platform to introduce myself but also showcases my proficiency in TypeScript and Tailwind CSS for creating responsive and visually appealing user interfaces. Hosted on Vercel, it represents a practical application of my development knowledge and a testament to my ongoing journey in the world of web development.',
        imagePath: "/images/projects/kh.png",
        link1: 'https://github.com/kylevh/personal-website-v2',
        link2: '',
        categories: ['Next.js 13', 'Vercel', 'TypeScript', 'Tailwind CSS']
    },
    {
        id: 6,
        title: 'Personal Website V1',
        desc: 'My first version of my personal website built using React.js and SCSS',
        pageDesc: 'This dynamic website is built with React.js, harnessing the power of modern web development tools. It not only serves as a platform to introduce myself but also showcases my proficiency in JavaScript and SCSS for creating responsive and visually appealing user interfaces. Hosted on Vercel, it represents a practical application of my development knowledge and a testament to my ongoing journey in the world of web development.',
        imagePath: "/images/projects/personal.png",
        link1: 'https://github.com/kylevh/personal-website-v1',
        link2: 'https://v1.kylevh.com/',
        categories: ['React.js', 'Vercel', 'SCSS', 'JavaScript']
    },
    {
        id: 7,
        title: 'PokePoke - 2D Video Game',
        desc: 'PokePoke 2D local multiplayer fighting game with platformer elements, intense combat, and captivating graphics created using Unity Engine',
        pageDesc: 'PokePoke is a local multiplayer fighting game created using C# and Unity Game Engine. This game offers an engaging experience that combines platformer elements with intense aerial and projectile combat. Players engage in thrilling 1v1 duels, competing in best-of-three matches to determine the superior poke flavor. With captivating graphics and intuitive gameplay, PokePoke promises hours of fun and competition.',
        imagePath: "/images/projects/pokepoke.png",
        link1: '',
        link2: 'https://ozp-games.itch.io/pokepoke',
        categories: ['Unity', 'C#', '2D Graphics']
    },
    {
        id: 8,
        title: 'Kyle Huynh - Graphic Design',
        desc: `See some of my graphic design work on Behance.net!`,
        pageDesc: `See some of my graphic design work on Behance.net! Check it out by visiting the link below`,
        imagePath: "/images/projects/design.png",
        link1: '',
        link2: 'https://www.behance.net/kylehuynh',
        categories: ['Adobe Photoshop', 'Blender 3D', 'Figma', 'Adobe Illustrator']
    },
    {
        id: 9,
        title: 'Real Estate Website Design',
        desc: `A fully-customized, sleek, and modern website created from scratch using NextJS 13 and TypeScript`,
        pageDesc: `The DEPHomes redesign employs the latest technologies, including NextJS 13, TypeScript, and Tailwind CSS. This website was crafted from the ground up to meet the needs of a prestigious real estate company, collaborating closely with the company's employees to design a website that not only met but exceeded their expectations, ensuring a seamless and visually captivating user experience.`,
        imagePath: "/images/projects/dephomes.png",
        link1: '',
        link2: 'https://dephomes.com',
        categories: ['Next.js 13', 'Vercel', 'TypeScript', 'Tailwind CSS',]
    },
    
    {
        id: 10,
        title: 'Kual. Notes - An AI-driven mental health journaling app',
        desc: `UI/UX prototype for a mental health journaling app that employs AI to generate health recommendations based on user input`,
        pageDesc: 'Kual. Notes is an AI-driven journaling tool that leverages React.js and Python, employing natural language processing and deep learning to analyze emotions from journal entries. While originally planning to integrate Symbl.ai for sentiment analysis, time constraints led to an alternative approach. The team faced challenges in adapting the app for mobile platforms but focused on web development. Future plans include expanding to the mobile market and applying data analytics to various sources, such as text messages and social media, to offer more precise responses and reach a broader audience.',
        imagePath: "/images/projects/kualnotes.jpg",
        link1: '',
        link2: 'https://devpost.com/software/kual-notes?ref_content=my-projects-tab&ref_feature=my_projects',
        categories: ['React.js', 'CSS', 'Python', 'JavaScript']
    },
    
    {
        id: 11,
        title: 'College Affordability Backend Testing Tool - Capstone Project',
        desc: 'A web app designed to streamline the testing process and enable developers to easily execute test scripts and oversee file management efficiently',
        pageDesc: `The College Affordability Application is an ongoing project that aims to help Washington State policy makers and prospective college students estimate the cost of attendance and financial aid they are eligible for based on their chosen college. The tool draws data from a variety of sources and factors in an individual’s financial situation and potential aid to provide a comprehensive estimate of the total cost of attendance based on these parameters.

        The application necessitates comprehensive testing, a process that is currently time-consuming for end-users to complete. Conducting tests to the backend presents a challenge for developers who lack familiarity with the tech stack. This learning curve significantly extends the time required for tasks that should otherwise be straightforward, leading to inefficiencies.
        
        During the course of the project, I worked in a full stack capacity. I created a user-friendly website dedicated to executing test scripts using the Django Python web framework and CSS, HTML, and JavaScript to tackle the problem. This solution replaced the inefficient and cumbersome task of manually entering console commands and reviewing files by providing a user-friendly interface that allows end-users to promptly run python scripts. The application also allows for editing, uploading, viewing, and deleting logs and configuration files easily, eliminating the need to directly access the backend.
        
        The result of developing a dedicated website for executing test scripts yielded a significant transformation in the testing process, replacing the manual, time-intensive tasks with a efficient, streamlined interface for developers working on the college affordability application`,
        imagePath: "/images/projects/cam.png",
        link1: '',
        link2: '',
        categories: ['Django', 'AWS', 'Python', 'JavaScript',]
    },





]

export default projects;