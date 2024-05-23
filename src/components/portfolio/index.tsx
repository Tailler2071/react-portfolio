import HTML from "../../assets/svg/skills/html.svg?react";
import s from "./s.module.scss";

type Props = {
    title: string,
}

const Portfolio = ({title}: Props) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                {title}
            </h2>

            <HTML/>
        </div>
    );
};

export default Portfolio;