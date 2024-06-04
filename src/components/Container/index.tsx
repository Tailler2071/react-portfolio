import {ReactNode} from "react";
import s from "./s.module.scss";
import StringToSpans from "../StringToSpans";
import cn from "../../utils/classNames.ts";

interface ContainerProps {
    title: string;
    description?: string;
    children: ReactNode;
    id?: string;
    className?: string;
}

const Container = ({children, title, description, id, className}: ContainerProps) => {
    return (
        <section className={cn(s.wrapper, {}, [className])} id={id}>
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
