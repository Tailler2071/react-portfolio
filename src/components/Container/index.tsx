import {ReactNode} from "react";
import s from "./s.module.scss";
import StringToSpans from "../StringToSpans";

interface ContainerProps {
    title: string;
    description?: string;
    children: ReactNode;
    id?: string;
}

const Container = ({children, title, description, id}: ContainerProps) => {
    return (
        <section className={s.wrapper} id={id}>
            <h2 className={s.title}>
                <StringToSpans text={title}/>
            </h2>
            {description && (
                <p className={s.text}>
                    {description}
                </p>
            )}
            {children}
        </section>
    );
};

export default Container;
