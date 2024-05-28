import Job from "../Job";
import s from "./s.module.scss";

const Experience = () => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                Experience
            </h2>
            <p className={s.text}>
                The main area of expertise is front end development (client side of the web).
            </p>

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
        </div>
    );
};

export default Experience;