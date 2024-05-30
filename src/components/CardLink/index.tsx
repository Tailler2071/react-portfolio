import LinkLogo from "../../assets/svg/common/link.svg?react";
import s from "./s.module.scss";
import cn from "../../utils/classNames.ts";

interface CardLinkProps {
    link: string;
    title: string;
    className?: string;
}

const CardLink = ({link, title, className}: CardLinkProps) => {
    return (
        <a className={cn(s.link, {}, [className])} href={link} target={"_blank"}>
            <h3 className={s.job}>
                {title}
            </h3>
            <LinkLogo/>
        </a>
    );
};

export default CardLink;