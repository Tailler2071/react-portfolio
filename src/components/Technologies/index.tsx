import HTMLLogo from "../../assets/svg/skills/html.svg?react";
import CSSLogo from "../../assets/svg/skills/css.svg?react";
import SCSSLogo from "../../assets/svg/skills/scss.svg?react";
import PostCSSLogo from "../../assets/svg/skills/PostCSS.svg?react";
import WebpackLogo from "../../assets/svg/skills/webpack.svg?react";
import ViteLogo from "../../assets/svg/skills/vite.svg?react";
import JSLogo from "../../assets/svg/skills/js.svg?react";
import TSLogo from "../../assets/svg/skills/ts.svg?react";
import ReactLogo from "../../assets/svg/skills/react.svg?react";
import NodeJStLogo from "../../assets/svg/skills/NodeJs.svg?react";
import JestLogo from "../../assets/svg/skills/jest.svg?react";
import VSLogo from "../../assets/svg/skills/VisualStudio.svg?react";
import WSLogo from "../../assets/svg/skills/WebStorm.svg?react";
import FigmaLogo from "../../assets/svg/skills/figma.svg?react";
import GitLogo from "../../assets/svg/skills/git.svg?react";
import SQLLogo from "../../assets/svg/skills/postgresql.svg?react";
import Container from "../Container";
import s from "./s.module.scss";

interface TechnologiesProps {
    title: string;
    description: string;
    className?: string;
}

const technologiesList = [
    {id: 1, title: "HTML5", logo: <HTMLLogo/>},
    {id: 2, title: "CSS3", logo: <CSSLogo/>},
    {id: 3, title: "SCSS", logo: <SCSSLogo/>},
    {id: 4, title: "PostCSS", logo: <PostCSSLogo/>},
    {id: 5, title: "Webpack", logo: <WebpackLogo/>},
    {id: 6, title: "Vite", logo: <ViteLogo/>},
    {id: 7, title: "Figma", logo: <FigmaLogo/>},
    {id: 8, title: "JavaScript", logo: <JSLogo/>},
    {id: 9, title: "TypeScript", logo: <TSLogo/>},
    {id: 10, title: "React", logo: <ReactLogo/>},
    {id: 11, title: "NodeJS", logo: <NodeJStLogo/>},
    {id: 12, title: "Jest", logo: <JestLogo/>},
    {id: 13, title: "Git", logo: <GitLogo/>},
    {id: 14, title: "PostgreSQL", logo: <SQLLogo/>},
    {id: 15, title: "VS Code", logo: <VSLogo/>},
    {id: 16, title: "WebStorm", logo: <WSLogo/>}
];

const Technologies = ({title, description, className}: TechnologiesProps) => {
    return (
        <Container title={title} description={description} id={"tools"} className={className}>
            <ul className={s.list}>
                {technologiesList.map(item => (
                    <li className={s.item} key={item.id}>
                        {item.logo}
                        <p className={s.name}> {item.title} </p>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Technologies;
