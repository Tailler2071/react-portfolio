import GitHubLogo from "../../assets/svg/portfolio/github.svg?react";
import s from "./s.module.scss";
import CardLink from "../CardLink";
import Badge from "../Badge";

interface CaseProps {
    type: string;
    title: string;
    description: string;
    siteLink: string | null;
    technologies: string[];
    gitLink: string | null;
    img: string;
}

const Case = ({type, title, description, siteLink, technologies, gitLink, img}: CaseProps) => {
    return (
        <li className={s.card}>
            <div className={s.content}>
                <div>
                    <p className={s.type}> {type} </p>
                    <CardLink link={siteLink} title={title} className={s.link}/>
                    <p className={s.description}> {description} </p>
                    {gitLink &&
                        <a className={s.git} href={gitLink} target="_blank">
                            <GitHubLogo/>
                        </a>
                    }
                </div>
                <ul className={s.list}>
                    {technologies.map((item, index) => (
                        <Badge text={item} key={index}/>
                    ))}
                </ul>
            </div>
            <div className={s.view}>
                <div className={s.images}>
                    <img src={img} alt=""/>
                </div>
            </div>
        </li>
    );
};

export default Case;
