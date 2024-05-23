import s from "./s.module.scss";

type Props = {
    title: string,
};

const Skills = ({title}: Props) => {
    console.log(s);

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                {title}
            </h2>
        </div>
    );
};

export default Skills;
