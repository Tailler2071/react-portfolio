import cn from "../../utils/classNames.ts";
import s from "./s.module.scss";
import LinkLogo from "../../assets/svg/common/link-variant.svg?react";

interface AboutUsProps {
    className?: string;
}

const AboutUs = ({className}: AboutUsProps) => {
    return (
        <section
            id={"about"}
            className={cn(s.about, {}, [className])}>
            <p>
                Однажды я познакомился с программированием и с головой окунулся в мир веб-разработки. Сейчас я
                углубленно изучаю интересующие меня технологии и учусь в университете&nbsp;
                <a className={s.link} href="https://tusur.ru/ru" target="_blank">ТУСУР</a>
                &nbsp;по специальности "Бизнес-информатика".
            </p>
            <p>
                Также я прошел несколько курсов, включая:
            </p>
            <ul>
                <li className={s.item}>
                    <LinkLogo/>
                    <a className={s.link} href="http://www.psu.ru/">  ПГНИУ</a> — Введение в web-разработку
                </li>
                <li className={s.item}>
                    <LinkLogo/>
                    <a className={s.link} href="https://perm.hse.ru/"> Высшая Школа Экономики</a> — Основы языка запросов SQL
                </li>
                <li className={s.item}>
                    <LinkLogo/>
                    <a className={s.link} href="https://practicum.yandex.ru/"> Яндекс.Практикум </a>— Мидл фронтенд-разработчик
                </li>
            </ul>
            <p>
                Когда я не за компьютером, люблю проводить время с друзьями, читать, путешествовать по разным городам
                или смотреть хорошие сериалы.
            </p>
        </section>
    );
};

export default AboutUs;
