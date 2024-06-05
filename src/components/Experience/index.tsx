import Job from "../Job";
import Container from "../Container";
import workExperience from "../../config/workExperience.ts";
import s from "./s.module.scss";

interface ExperienceProps {
    title: string;
    description: string;
}

const Experience = ({title, description}: ExperienceProps) => {
    return (
        <Container title={title} description={description} id={"experience"}>
            <ul className={s.cards}>
                {workExperience.map(work => (
                    <Job
                        key={work.id}
                        dates={work.dates}
                        post={work.post}
                        job={work.job}
                        link={work.link}
                        description={work.description}
                    />
                ))}
            </ul>
        </Container>
    );
};

export default Experience;
