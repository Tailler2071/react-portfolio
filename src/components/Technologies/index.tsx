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

import s from "./s.module.scss";

type Props = {
    title: string;
    description: string;
};

const Technologies = ({title, description}: Props) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                {title}
            </h2>
            <p className={s.text}>
                {description}
            </p>

            <div className={s.skills}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <HTMLLogo/>
                        <p>HTML5</p>
                    </li>
                    <li className={s.item}>
                        <CSSLogo/>
                        <p>CSS3</p>
                    </li>
                    <li className={s.item}>
                        <SCSSLogo/>
                        <p>SCSS</p>
                    </li>
                    <li className={s.item}>
                        <PostCSSLogo/>
                        <p>PostCSS</p>
                    </li>
                    <li className={s.item}>
                        <WebpackLogo/>
                        <p>Webpack</p>
                    </li>
                    <li className={s.item}>
                        <ViteLogo/>
                        <p>Vite</p>
                    </li>
                    <li className={s.item}>
                        <FigmaLogo/>
                        <p>Figma</p>
                    </li>
                </ul>
                <ul className={s.list}>
                    <li className={s.item}>
                        <JSLogo/>
                        <p>JavaScript</p>
                    </li>
                    <li className={s.item}>
                        <TSLogo/>
                        <p>TypeScript</p>
                    </li>
                    <li className={s.item}>
                        <ReactLogo/>
                        <p>React</p>
                    </li>
                    <li className={s.item}>
                        <NodeJStLogo/>
                        <p>NodeJS</p>
                    </li>
                    <li className={s.item}>
                        <JestLogo/>
                        <p>Jest</p>
                    </li>
                    <li className={s.item}>
                        <GitLogo/>
                        <p>Git</p>
                    </li>
                    <li className={s.item}>
                        <SQLLogo/>
                        <p>PostgreSQL</p>
                    </li>
                </ul>
                <ul className={s.list}>
                    <li className={s.item}>
                        <VSLogo/>
                        <p>Visual Studio</p>
                    </li>
                    <li className={s.item}>
                        <WSLogo/>
                        <p>WebStorm</p>
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default Technologies;
