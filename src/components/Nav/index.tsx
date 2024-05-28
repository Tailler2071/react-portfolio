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
                <li className={s.active}>Experience</li>
                <li>Technologies and tools</li>
                <li>Projects</li>
                <li>And finally</li>
            </ul>
        </nav>
    );
};

export default Nav;