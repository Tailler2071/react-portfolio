import s from "./s.module.scss";

const Footer = () => {
    return (
        <footer className={s.footer}>
            Дизайн разработан в <a href="#">Figma</a>, код написан в <a href="#">WebStorm</a>.
            Проект реализован с использованием <a href="#">React.js</a> и <a href="#">SCSS</a>,
            развернут с помощью <a href="#">Vercel</a>. Используется шрифт <a href="#">JetBrains Mono</a> для всего текста на странице.
        </footer>
    );
};

export default Footer;