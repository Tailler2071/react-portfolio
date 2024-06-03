import Container from "../Container";
import planet from "../../assets/images/finally/planet.jpg";
import s from "./s.module.scss";

interface FinallyProps {
    title: string;
}

const Finally = ({title}: FinallyProps) => {
    return (
        <Container title={title}>
            <p className={s.text}>
                Я открыт для новых возможностей работы или участия в интересных проектах. Пишите мне в Telegram или на
                почту с вопросами или просто для знакомства - обязательно отвечу!
            </p>


            <div className={s.box}>

                <p className={s.email}>
                    tailler2071@yandex.ru
                </p>

                <div className={s.image}>
                    <img src={planet} alt=""/>
                </div>
            </div>


        </Container>
    );
};

export default Finally;