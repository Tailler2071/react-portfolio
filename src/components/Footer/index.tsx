import planet from "../../assets/images/finally/planet.webp";
import s from "./s.module.scss";
import StringToSpans from "../StringToSpans";

interface FooterProps {
    title: string;
}

const Footer = ({title}: FooterProps) => {
    return (
        <footer className={s.footer}>
            <h2 className={s.title}>
                <StringToSpans text={title}/>
            </h2>
            <p className={s.text}>
                Я открыт для новых возможностей работы или участия в интересных проектах. Пишите мне в
                Telegram или на почту с вопросами или просто для знакомства - обязательно отвечу!
            </p>
            <div className={s.box}>
                <a className={s.email} href="mailto:tailler2071@yandex.ru">
                    tailler2071@yandex.ru
                </a>
                <div className={s.info}>
                    Дизайн разработан в <a className={s.link} target="_blank" href="https://www.figma.com/">Figma</a>,
                    код написан в <a className={s.link} target="_blank"
                                     href="https://www.jetbrains.com/webstorm/">WebStorm</a>. Проект реализован с
                    использованием <a className={s.link} target="_blank" href="https://react.dev/"> React.js</a> и <a
                    className={s.link} target="_blank" href="https://sass-lang.com/">SCSS</a>, развернут с помощью <a
                    className={s.link} target="_blank" href="https://vercel.com/">Vercel</a>. Используется шрифт <a
                    className={s.link} target="_blank"
                    href="https://fonts.google.com/specimen/Source+Sans+3?query=Source+Sans+3">Source Sans 3</a> для
                    всего текста на странице.
                </div>
                <div className={s.image}>
                    <img src={planet} alt="moon"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
