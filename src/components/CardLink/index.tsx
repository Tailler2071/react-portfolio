import LinkLogo from "../../assets/svg/common/link.svg?react";
import cn from "../../utils/classNames.ts";
import s from "./s.module.scss";

interface CardLinkProps {
    link: string | null;
    title: string;
    className?: string;
}

const CardLink = ({link, title, className}: CardLinkProps) => {
    return (
        <>
            {link ? (
                <a className={cn(s.link, {}, [className])} href={link} target={"_blank"}>
                    <h3 className={s.job}> {title} </h3>
                    <LinkLogo/>
                </a>
            ) : (
                <h3 className={s.job + " " + s.title}> {title} </h3>
            )}
        </>
    );
};

export default CardLink;
