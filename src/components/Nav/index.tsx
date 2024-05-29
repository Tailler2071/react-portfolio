import s from "./s.module.scss";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.left}>
                <li>00</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
            </ul>
            <div className={s.line}>
                <div className={s.toddler}></div>
            </div>
            <ul className={s.right}>
                <li className={s.active}>
                    <a href="#experience">Мой опыт</a>
                </li>
                <li>
                    <a href="#tools">Технологии и инструменты</a>
                </li>
                <li>
                    <a href="#projects">Проекты</a>
                </li>
                <li>
                    <a href="#finaly">Что дальше?</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;