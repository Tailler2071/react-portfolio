import Job from "../Job";
import s from "./s.module.scss";
import Container from "../Container";

interface ExperienceProps {
    title: string;
    description: string;
}

const Experience = ({title, description}: ExperienceProps) => {
    return (
        <Container title={title} description={description}>
            <ul className={s.cards}>
                <Job
                    dates={"Feb 2023 — May 2024"}
                    post={"Front End Developer"}
                    job={"Growtask"}
                    link={""}
                    description={
                        "Developed, maintained, and shipped production code for client websites. Clients included\n" +
                        "Dom.ru, Lovesac, U.S. Cellular, U.S. Department of Defense, and more."
                    }
                />

                <Job
                    dates={"Apr 2023 — Jun 2024"}
                    post={"Student"}
                    job={"Ya.practicum"}
                    link={""}
                    description={
                        "Developed, maintained, and shipped production code for client websites. Clients included\n" +
                        "Dom.ru, Lovesac, U.S. Cellular, U.S. Department of Defense, and more."
                    }
                />
            </ul>
        </Container>
    );
};

export default Experience;