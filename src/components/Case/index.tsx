import LinkLogo from "../../assets/svg/common/link.svg?react";
import GitHubLogo from "../../assets/svg/portfolio/github.svg?react";
import s from "./s.module.scss";

type Props = {
    type: string;
    title: string;
    link: string;
    technologies: string;
    gitLink?: string;
    img: string;
}

const Case = ({type, title, link, technologies, gitLink,  img}: Props) => {
    return (
        <li className={s.card}>
            <div className={s.content}>
                <div>
                    <p className={s.type}> {type} </p>
                    <a href={link} target="_blank" className={s.line}>
                        <div className={s.name}>
                            {title}
                        </div>
                        <LinkLogo/>
                    </a>
                    <p>
                        Интернет-магазин, специализирующийся на оптовых продажах аксессуаров для телефонов.
                    </p>
                    {gitLink &&
                        <a href={gitLink} target="_blank">
                            <GitHubLogo/>
                        </a>
                    }
                </div>

                <p className={s.technologies}> {technologies} </p>
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