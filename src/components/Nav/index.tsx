import {Link as LinkScroll} from "react-scroll";
import s from "./s.module.scss";
import {useEffect, useRef, useState} from "react";

const options = {
    duration: 400,
    smooth: true,
    activeClass: s.active,
    spy: true,
    offset: 0,
    className: s.link
};


const Nav = () => {
    const [usePosition, setPosition] = useState(0);
    const [useHeight, setHeight] = useState(0);
    const ref = useRef(null);

    const handleSetActive = (to: string, element) => {
        console.log(to, element);

        const s4 = (((useHeight - 30) / 4) / useHeight) * 100;


        console.log(((useHeight - 30) / 4) / useHeight);

        if (to === "about") {
            setPosition(0);
        }
        if (to === "experience") {
            setPosition(s4);
        }
        if (to === "tools") {
            setPosition(s4 * 2);
        }
        if (to === "projects") {
            setPosition(s4 * 3);
        }

        if (to === "finally") {
            setPosition(s4 * 4);
        }
    };

    useEffect(() => {
        setHeight(ref.current ? ref.current.offsetHeight : 0);

    }, [ref.current]);

    return (
        <nav className={s.nav}>
            <ul className={s.left}>
                <li>00</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
            </ul>
            <div className={s.line}>
                <div
                    className={s.line2}
                    style={{transform: `translateY(${usePosition}%)`}}
                    ref={ref}
                >
                    <div className={s.toddler}></div>
                </div>
            </div>
            <ul className={s.right}>
                <li>
                    <LinkScroll
                        to="about"
                        onSetActive={handleSetActive}
                        {...options}
                    >
                        Обо мне
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll
                        to="experience"
                        onSetActive={handleSetActive}
                        {...options}
                    >
                        Мой опыт
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll
                        to="tools"
                        onSetActive={handleSetActive}
                        {...options}
                    >
                        Технологии и инструменты
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll
                        to="projects"
                        onSetActive={handleSetActive}
                        {...options}
                    >
                        Проекты
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll
                        to="finally"
                        onSetActive={handleSetActive}
                        {...options}
                    >
                        Что дальше?
                    </LinkScroll>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;