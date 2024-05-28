import LinkLogo from "../../assets/svg/common/link.svg?react";
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

                <a className={s.line} href={link} target={"_blank"}>
                    <h3 className={s.job}>
                        {job}
                    </h3>
                    <LinkLogo/>
                </a>

                <p>
                    {description}
                </p>


            </div>

        </li>
    );
};

export default Job;