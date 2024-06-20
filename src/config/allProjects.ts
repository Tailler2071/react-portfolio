interface IAllProjects {
    id: number;
    year: number;
    project: string;
    madeAt: string | null;
    technologies: string[];
    website: string | null;
    github: string | null;
}

const allProjects: IAllProjects[] = [
    {
        id: 1,
        year: 2024,
        project: "Интернет-магазин Rh store",
        madeAt: "Growtask",
        technologies: ["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"],
        website: "http://rhstore.master.et9.ru:10580/",
        github: null
    },
    {
        id: 2,
        year: 2024,
        project: "Интернет-магазин shop.dom.ru",
        madeAt: "Growtask",
        technologies: ["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"],
        website: "https://shop.dom.ru/",
        github: null
    },
    {
        id: 3,
        year: 2024,
        project: "Многостраничный сайт для оператора бортового питания Umami",
        madeAt: "Growtask",
        technologies: ["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"],
        website: "http://umami.master.et9.ru:10580/",
        github: null
    },
    {
        id: 4,
        year: 2023,
        project: "Проект электрики для Дом.ру",
        madeAt: "Growtask",
        technologies: ["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"],
        website: "https://projectelectrohome.ru/",
        github: null

    },
    {
        id: 5,
        year: 2023,
        project: "Проект умного дома для Дом.ру",
        madeAt: "Growtask",
        technologies: ["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"],
        website: "https://projectsmarthome.ru/",
        github: null
    },
    {
        id: 6,
        year: 2023,
        project: "Веб-приложение Memory Game",
        madeAt: "Ya.Practicum",
        technologies: ["TypeScript", "SCSS", "React", "Jest", "NodeJS", "PostgreSQL"],
        website: null,
        github: "https://github.com/Tailler2071/memory-game"
    },
    {
        id: 7,
        year: 2023,
        project: "Мессенджер",
        madeAt: "Ya.Practicum",
        technologies: ["TypeScript", "PostCSS", "Mocha", "Chai", "Handlebars"],
        website: null,
        github: "https://github.com/Tailler2071/middle.messenger.praktikum.yandex"
    }
];

export default allProjects;