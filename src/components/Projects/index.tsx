import rh from "../../assets/images/projects/rh.png";
import domru from "../../assets/images/projects/domru.png";
import memory from "../../assets/images/projects/memory.png";
import s from "./s.module.scss";
import Case from "../Case";

type Props = {
    title: string;
    description: string;
}

const Portfolio = ({title, description}: Props) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                {title}
            </h2>
            <p className={s.text}>
                {description}
            </p>


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

            <a href={""} style={{marginTop: "40px", marginBottom: "100px"}}>
                Show More
            </a>
        </div>
    );
};

export default Portfolio;