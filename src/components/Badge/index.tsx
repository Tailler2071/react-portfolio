import s from "./s.module.scss";

interface BadgeProps {
    text: string;
}

const Badge = ({text}: BadgeProps) => {
    return (
        <li className={s.badge}>
            {text}
        </li>
    );
};

export default Badge;