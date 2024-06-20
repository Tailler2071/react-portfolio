import {useState} from "react";
import {Link as LinkScroll} from "react-scroll";
import s from "./s.module.scss";
import navigationLinks from "../../config/navigationLinks.ts";

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

const positions: { [key: string]: number } = {};

navigationLinks.forEach((item, index) => {
    positions[item.link] = index * 25;
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
            </ul>
            <div className={s.line}>
                <div
                    className={s.toddler}
                    style={{top: `${usePosition}%`}}>
                </div>
            </div>
            <ul className={s.right}>
                {navigationLinks.map((item) => (
                    <li key={item.id}>
                        <LinkScroll
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
