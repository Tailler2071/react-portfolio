import {ReactNode} from "react";
import s from "./s.module.scss";

interface ContainerProps {
    title: string;
    description: string;
    children: ReactNode;
}

const Container = ({children, title, description}: ContainerProps) => {
    return (
        <section className={s.wrapper}>
            <h2 className={s.title}>
                {title}
            </h2>
            <p className={s.text}>
                {description}
            </p>

            {children}
        </section>
    );
};

export default Container;
