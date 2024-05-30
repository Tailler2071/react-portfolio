import {ReactNode} from "react";
import s from "./s.module.scss";

interface ContainerProps {
    title: string;
    description: string;
    children: ReactNode;
    id?: string;
}

const Container = ({children, title, description, id}: ContainerProps) => {
    return (
        <section className={s.wrapper} id={id}>
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
