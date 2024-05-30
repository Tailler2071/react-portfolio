import Container from "../Container";
import s from "./s.module.scss";

interface FinallyProps {
    title: string;
    description: string;
}

const Finally = ({title, description}: FinallyProps) => {
    return (
        <Container
            title={title}
            description={description}
            id={"finally"}
        >
            <p className={s.text}>
                Всегда открыт для интересных предложений и проектов.
            </p>
            <p>
                Если есть вопросы или хотите поздороваться, пишите в Telegram или на почту. Обязательно отвечу!
            </p>
        </Container>
    );
};

export default Finally;