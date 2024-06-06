import s from "./s.module.scss";
import allProjects from "../../config/allProjects.ts";
import Badge from "../Badge";
import GitHubLogo from "../../assets/svg/links/github.svg?react";
import LinkLogo from "../../assets/svg/common/round-link.svg?react";

const Table = () => {
    return (
        <div className={s.table}>
            <div className={s.header}>
                <div>Год</div>
                <div>Проект</div>
                <div className={s.hMade}>Сделано в</div>
                <div className={s.hTechno}>Технологии</div>
                <div>Ссылки</div>
            </div>

            <ul className={s.list}>
                {allProjects.map(item => (
                    <li className={s.row} key={item.id}>
                        <div className={s.year}> {item.year} </div>
                        <div className={s.project}> {item.project} </div>
                        <div className={s.made}> {item.madeAt} </div>
                        <ul className={s.badges}>
                            {item.technologies.map((el, i) => (
                                <Badge text={el} key={i}/>
                            ))}
                        </ul>
                        <div className={s.links}>
                            {item.website && (
                                <a className={s.link} href={item.website} target="_blank">

                                    <LinkLogo className={s.website}/>
                                </a>
                            )}

                            {item.github && (
                                <a className={s.link} href={item.github} target="_blank">

                                    <GitHubLogo className={s.git}/>
                                </a>
                            )}


                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Table;