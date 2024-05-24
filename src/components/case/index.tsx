import LinkLogo from "../../assets/svg/portfolio/link.svg?react";
import GitHubLogo from "../../assets/svg/portfolio/github.svg?react";
import s from "./s.module.scss";
import {ReactNode} from "react";

type Props = {
    type: string;
    title: string;
    link: string;
    children: ReactNode;
    technologies: string;
    gitLink?: string;
}

const Case = ({type, title, link, technologies, gitLink, children}: Props) => {
    return (
        <li className={s.card}>
            <div>
                <p className={s.type}> {type} </p>
                <a href={link} target="_blank" className={s.line}>
                    <div className={s.name}>
                        {title}
                    </div>
                    <LinkLogo/>
                </a>
                <p className={s.technologies}> {technologies} </p>
                {gitLink &&
                    <a href={gitLink} target="_blank">
                        <GitHubLogo/>
                    </a>
                }
            </div>
            {children}
        </li>
    );
};

export default Case;