import LinkLogo from "../../assets/svg/common/link-variant.svg?react";
import StringToSpans from "../StringToSpans";
import courses from "../../config/courses.ts";
import cn from "../../utils/classNames.ts";
import s from "./s.module.scss";

interface AboutUsProps {
    className?: string;
}

const AboutUs = ({className}: AboutUsProps) => {
    return (
        <section id={"about"} className={cn(s.about, {}, [className])}>
            <h2 className={s.title}>
                <StringToSpans text={"Обо мне"}/>
            </h2>
            <div className={s.content}>
                <p>
                    Однажды я познакомился с программированием и с головой окунулся в мир веб-разработки. Сейчас я
                    углубленно изучаю интересующие меня технологии и учусь в университете&nbsp;
                    <a className={s.link} href="https://tusur.ru/ru" target="_blank">ТУСУР</a>
                    &nbsp;по специальности "Бизнес-информатика".
                </p>
                <p>Также я прошел несколько курсов, включая:</p>
                <ul className={s.list}>
                    {courses.map(course => (
                        <li className={s.item} key={course.id}>
                            <LinkLogo/>
                            <span>
                                <a className={s.link} href={course.link}>{course.name}</a> — {course.description}
                            </span>
                        </li>
                    ))}
                </ul>
                <p>
                    Когда я не за компьютером, люблю проводить время с друзьями, читать, путешествовать по разным
                    городам или смотреть хорошие сериалы.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
