import Job from "../Job";
import s from "./s.module.scss";
import Container from "../Container";

interface ExperienceProps {
    title: string;
    description: string;
}

const Experience = ({title, description}: ExperienceProps) => {
    return (
        <Container title={title} description={description} id={"experience"}>
            <ul className={s.cards}>
                <Job
                    dates={"Фев 2023 — Май 2024"}
                    post={"Front End разработчик"}
                    job={"Growtask"}
                    link={"https://growtask.ru/"}
                    description={
                        "Верстка и разработка на JS, поддержка действующего кода. В число клиентов входят Dom.ru, RH store, Space line и др."
                    }
                />

                <Job
                    dates={"Апр 2023 — Июнь 2024"}
                    post={"Студент"}
                    job={"Ya.practicum"}
                    link={"https://practicum.yandex.ru"}
                    description={
                        "Разработка индивидуального проекта, работа в команде по созданию веб игры"
                    }
                />
            </ul>
        </Container>
    );
};

export default Experience;