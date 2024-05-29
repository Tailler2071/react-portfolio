import s from "./s.module.scss";

interface FinallyProps {
    title: string;
    description: string;
}


const Finally = ({title, description}: FinallyProps) => {
    return (
        <div id={"finaly"}>
            <h2 className={s.title}>
                {title}
            </h2>
            <p className={s.text}>
                {description}
            </p>

            Если у вас есть вопросы или вы просто хотите поздороваться, просто напишите мне на электронную почту!
        </div>
    );
};

export default Finally;