import rh from "../../assets/images/projects/rh.png";
import domru from "../../assets/images/projects/domru.png";
import memory from "../../assets/images/projects/memory.png";
import ArrowIcon from "../../assets/svg/common/arrow.svg?react";
import s from "./s.module.scss";
import Case from "../Case";
import Container from "../Container";

interface PortfolioProps {
    title: string;
    description: string;
}

const Portfolio = ({title, description}: PortfolioProps) => {
    return (
        <Container title={title} description={description} id={"projects"}>
            <ul className={s.cards}>
                <Case
                    type={"Интернет магазин"}
                    title={"Rh store"}
                    description={"Интернет-магазин, специализирующийся на оптовых продажах аксессуаров для телефонов."}
                    siteLink={"/"}
                    technologies={["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"]}
                    img={rh}
                />
                <Case
                    type={"Интернет магазин"}
                    title={"shop.dom.ru"}
                    description={"Новый сайт интернет-провайдера дом.ру для продажи Wi-Fi роутеров, Яндекс станций, mesh-систем и видеоприставок."}
                    siteLink={"/"}
                    technologies={["HTML5", "SCSS", "JavaScript", "PHP", "CMS Simflex"]}
                    img={domru}
                />
                <Case
                    type={"Веб-приложение"}
                    title={"Memory Game"}
                    description={"Командный проект, разработанный в рамках курса от Яндекс.Практикума."}
                    siteLink={"/"}
                    gitLink={"/"}
                    technologies={["TypeScript", "SCSS", "React", "Jest", "NodeJS", "PostgreSQL"]}
                    img={memory}
                />


            </ul>

            <a className={s.link} href={"#"}>
                <span>
                    Показать все
                </span>
                <ArrowIcon/>
            </a>
        </Container>

    );
};

export default Portfolio;