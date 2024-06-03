import CardLink from "../CardLink";
import s from "./s.module.scss";

interface JobProps {
    dates: string;
    post: string;
    job: string;
    link: string;
    description: string;
}

const Job = ({dates, post, job, link, description}: JobProps) => {
    return (
        <li className={s.card}>
            <div className={s.dates}>
                {dates}
            </div>
            <div>
                <div className={s.name}>
                    {post}
                </div>

                <CardLink link={link} title={job} className={s.link}/>
                <p className={s.description}>
                    {description}
                </p>
            </div>
        </li>
    );
};

export default Job;