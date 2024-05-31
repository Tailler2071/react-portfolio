import {useState} from "react";
import {Link as LinkScroll} from "react-scroll";
import s from "./s.module.scss";

const options = {
    duration: 300,
    smooth: "linear",
    activeClass: s.active,
    spy: true,
    hashSpy: true,
    offset: 0,
    className: s.link,
    isDynamic: true,
};

interface Link {
    id: number;
    link: string;
    text: string;
}

const links: Link[] = [
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
    },
    {
        id: 4,
        link: "finally",
        text: "Что дальше?",
    }
];

const positions: { [key: string]: number } = {};

links.forEach((item, index) => {
    positions[item.link] = index * 20;
});


const Nav = () => {
    const [usePosition, setPosition] = useState(0);


    const handleSetActive = (to: string) => {
        if (Object.prototype.hasOwnProperty.call(positions, to)) {
            setPosition(positions[to]);
        } else {
            return;
        }
    };

    return (
        <nav className={s.nav}>
            <ul className={s.numbers}>
                <li>00</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
            </ul>
            <div className={s.line}>
                <div
                    className={s.toddler}
                    style={{top: `${usePosition}%`}}>
                </div>
            </div>
            <ul className={s.right}>
                {links.map((item) => (
                    <li>
                        <LinkScroll
                            key={item.id}
                            to={item.link}
                            onSetActive={handleSetActive}
                            {...options}
                        >
                            {item.text}
                        </LinkScroll>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;