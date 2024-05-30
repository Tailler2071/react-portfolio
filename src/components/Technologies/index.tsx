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
}

const Technologies = ({title, description}: TechnologiesProps) => {
    return (

        <Container title={title} description={description} id={"tools"}>
            <ul className={s.list}>
                <li className={s.item}>
                    <HTMLLogo/>
                    <p className={s.name}>
                        HTML5
                    </p>
                </li>
                <li className={s.item}>
                    <CSSLogo/>
                    <p className={s.name}>
                        CSS3
                    </p>
                </li>
                <li className={s.item}>
                    <SCSSLogo/>
                    <p className={s.name}>
                        SCSS
                    </p>
                </li>
                <li className={s.item}>
                    <PostCSSLogo/>
                    <p className={s.name}>
                        PostCSS
                    </p>
                </li>
                <li className={s.item}>
                    <WebpackLogo/>
                    <p className={s.name}>
                        Webpack
                    </p>
                </li>
                <li className={s.item}>
                    <ViteLogo/>
                    <p className={s.name}>
                        Vite
                    </p>
                </li>
                <li className={s.item}>
                    <FigmaLogo/>
                    <p className={s.name}>
                        Figma
                    </p>
                </li>
                <li className={s.item}>
                    <JSLogo/>
                    <p className={s.name}>
                        JavaScript
                    </p>
                </li>
                <li className={s.item}>
                    <TSLogo/>
                    <p className={s.name}>
                        TypeScript
                    </p>
                </li>
                <li className={s.item}>
                    <ReactLogo/>
                    <p className={s.name}>
                        React
                    </p>
                </li>
                <li className={s.item}>
                    <NodeJStLogo/>
                    <p className={s.name}>
                        NodeJS
                    </p>
                </li>
                <li className={s.item}>
                    <JestLogo/>
                    <p className={s.name}>
                        Jest
                    </p>
                </li>
                <li className={s.item}>
                    <GitLogo/>
                    <p className={s.name}>
                        Git
                    </p>
                </li>
                <li className={s.item}>
                    <SQLLogo/>
                    <p className={s.name}>
                        PostgreSQL
                    </p>
                </li>
                <li className={s.item}>
                    <VSLogo/>
                    <p className={s.name}>
                        VS Code
                    </p>
                </li>
                <li className={s.item}>
                    <WSLogo/>
                    <p className={s.name}>
                        WebStorm
                    </p>
                </li>
            </ul>
        </Container>
    );
};

export default Technologies;
