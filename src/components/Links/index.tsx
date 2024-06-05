import GitHubLogo from "../../assets/svg/links/github.svg?react";
import TelegramLogo from "../../assets/svg/links/telegram.svg?react";
import MailLogo from "../../assets/svg/links/mail.svg?react";
import cn from "../../utils/classNames";
import s from "./s.module.scss";

interface LinksProps {
    className?: string;
}


const Links = ({className}: LinksProps) => {
    return (
        <ul className={cn(s.list, {}, [className])}>
            <li className={s.item}>
                <a href="https://github.com/Tailler2071" target="_blank">
                    <GitHubLogo/>
                </a>
            </li>
            <li className={s.item}>
                <a href="https://t.me/tailler2071" target="_blank">
                    <TelegramLogo/>
                </a>
            </li>
            <li className={s.item}>
                <a href="mailto:tailler2071@yandex.ru">
                    <MailLogo/>
                </a>
            </li>
        </ul>
    );
};

export default Links;