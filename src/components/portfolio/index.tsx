import DomRuLogo from "../../assets/svg/portfolio/domru.svg?react";
import s from "./s.module.scss";
import Case from "../case";

type Props = {
    title: string,
}

const Portfolio = ({title}: Props) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                {title}
            </h2>


            <ul className={s.cards}>
                <Case
                    type={"Интернет-магазин"}
                    title={"rh-store"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                >
                    <div className={s.images}>
                        <div className={s.full}>
                            <img src="/src/assets/images/portfolio/rh-f.png" alt=""/>
                        </div>
                        <div className={s.mobile}>
                            <img src="/src/assets/images/portfolio/rh-m.png" alt=""/>
                        </div>
                    </div>
                </Case>

                <Case
                    type={"Интернет-магазин"}
                    title={"shop.dom.ru"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                >
                    <div className={s.images}>
                        <div className={s.dom}>
                            <DomRuLogo/>
                        </div>
                    </div>
                </Case>

                <Case
                    type={"Интернет-магазин"}
                    title={"shop.dom.ru"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                >
                    <div className={s.images}>
                        <div className={s.dom}>
                            <DomRuLogo/>
                        </div>
                    </div>
                </Case>
                <Case
                    type={"Интернет-магазин"}
                    title={"shop.dom.ru"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                >
                    <div className={s.images}>
                        <div className={s.dom}>
                            <DomRuLogo/>
                        </div>
                    </div>
                </Case>
                <Case
                    type={"Интернет-магазин"}
                    title={"shop.dom.ru"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                >
                    <div className={s.images}>
                        <div className={s.dom}>
                            <DomRuLogo/>
                        </div>
                    </div>
                </Case>
                <Case
                    type={"Интернет-магазин"}
                    title={"shop.dom.ru"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                >
                    <div className={s.images}>
                        <div className={s.dom}>
                            <DomRuLogo/>
                        </div>
                    </div>
                </Case>




            </ul>

            <div style={{marginTop: "40px", marginBottom: "100px"}}>
                Посмотреть все проекты
            </div>
        </div>
    );
};

export default Portfolio;