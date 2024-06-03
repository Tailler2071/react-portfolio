import GitHubLogo from "../../assets/svg/portfolio/github.svg?react";
import s from "./s.module.scss";
import CardLink from "../CardLink";

type Props = {
    type: string;
    title: string;
    description: string;
    siteLink: string;
    technologies: string[];
    gitLink?: string;
    img: string;
}

const Case = ({type, title, description, siteLink, technologies, gitLink, img}: Props) => {
    return (
        <li className={s.card}>
            <div className={s.content}>
                <div>
                    <p className={s.type}>
                        {type}
                    </p>
                    <CardLink link={siteLink} title={title} className={s.link}/>


                    <p className={s.description}>
                        {description}
                    </p>
                    {gitLink &&
                        <a className={s.git} href={gitLink} target="_blank">
                            <GitHubLogo/>
                        </a>
                    }
                </div>

                <ul className={s.list}>

                    {
                        technologies.map((item, index) => (
                            <p
                                className={s.technologies}
                                key={index}
                            > {item} </p>
                        ))
                    }
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