import {Link} from "react-router-dom";
import Case from "../Case";
import Container from "../Container";
import ArrowIcon from "../../assets/svg/common/arrow.svg?react";
import projects from "../../config/projects.ts";
import s from "./s.module.scss";

interface PortfolioProps {
    title: string;
    description: string;
}

const Portfolio = ({title, description}: PortfolioProps) => {
    return (
        <Container title={title} description={description} id={"projects"}>
            <ul className={s.cards}>
                {projects.map(project => (
                    <Case
                        key={project.id}
                        type={project.type}
                        title={project.title}
                        description={project.description}
                        siteLink={project.siteLink}
                        gitLink={project.gitLink}
                        technologies={project.technologies}
                        img={project.img}
                    />
                ))}
            </ul>
            <Link className={s.link} to={"projects"}>
                <span> Показать все </span>
                <ArrowIcon/>
            </Link>
        </Container>
    );
};

export default Portfolio;
