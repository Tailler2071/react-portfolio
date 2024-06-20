export interface navLink {
    id: number;
    link: string;
    text: string;
}

const navigationLinks: navLink[] = [
    {
        id: 1,
        link: "about",
        text: "Обо мне",
    },
    {
        id: 2,
        link: "experience",
        text: "Мой опыт",
    },
    {
        id: 3,
        link: "tools",
        text: "Технологии и инструменты",
    },
    {
        id: 4,
        link: "projects",
        text: "Проекты",
    }
];

export default navigationLinks;
