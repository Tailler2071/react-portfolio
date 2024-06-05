import rh from "../assets/images/projects/rh.png";
import domru from "../assets/images/projects/domru.png";
import memory from "../assets/images/projects/memory.png";

const projects = [
    {
        id: 1,
        type: "Интернет магазин",
        title: "Rh store",
        description: "Интернет-магазин, специализирующийся на оптовых продажах аксессуаров для телефонов.",
        siteLink: "http://rhstore.master.et9.ru:10580/",
        gitLink: null,
        technologies: ["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"],
        img: rh
    },
    {
        id: 2,
        type: "Интернет магазин",
        title: "shop.dom.ru",
        description: "Новый сайт интернет-провайдера дом.ру для продажи Wi-Fi роутеров, Яндекс станций, mesh-систем и видеоприставок.",
        siteLink: "https://shop.dom.ru/",
        technologies: ["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"],
        gitLink: null,
        img: domru
    },
    {
        id: 3,
        type: "Веб-приложение",
        title: "Memory Game",
        description: "Командный проект, разработанный в рамках курса от Яндекс.Практикума.",
        siteLink: null,
        gitLink: "https://github.com/Tailler2071/memory-game",
        technologies: ["TypeScript", "SCSS", "React", "Jest", "NodeJS", "PostgreSQL"],
        img: memory
    }
];

export default projects;