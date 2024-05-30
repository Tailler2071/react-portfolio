import rh from "../../assets/images/projects/rh.png";
import domru from "../../assets/images/projects/domru.png";
import memory from "../../assets/images/projects/memory.png";
import ArrowIcon from "../../assets/svg/common/arrow.svg?react";
import s from "./s.module.scss";
import Case from "../Case";
import Container from "../Container";

type Props = {
    title: string;
    description: string;
}

const Portfolio = ({title, description}: Props) => {
    return (
        <Container title={title} description={description}>
            <ul className={s.cards}>
                <Case
                    type={"Online Store"}
                    title={"Rh store"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                    img={rh}
                />
                <Case
                    type={"Online Store"}
                    title={"shop.dom.ru"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                    img={domru}
                />
                <Case
                    type={"Online Store"}
                    title={"shop.dom.ru"}
                    link={"/"}
                    technologies={"HTML5, SCSS, JavaScript, PHP, CMS Simflex."}
                    img={memory}
                />


            </ul>

            <a className={s.link} href={""}>
                <div>
                    Show More
                </div>
                <ArrowIcon/>
            </a>
        </Container>

    );
};

export default Portfolio;