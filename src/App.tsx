import AboutUs from "./components/AboutUs";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Finally from "./components/Finally";

import "./scss/index.scss";
import s from "./app.module.scss";
import Nav from "./components/Nav";
import Links from "./components/Links";

const App = () => {


    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <div>
                    <div className={s.info}>
                        <h1 className={s.title}>Hi, I'm Aleksandr </h1>
                        <p className={s.text}>Front End Developer</p>
                    </div>
                    <Nav/>
                </div>
                <Links className={s.links}/>
            </header>
            <main className={s.main}>
                <AboutUs/>
                <Experience/>
                <Technologies
                    title={"Technologies and tools"}
                    description={"The main area of expertise is front end development (client side of the web)."}
                />
                <Projects
                    title={"Projects"}
                    description={"The main area of expertise is front end development (client side of the web)."}
                />
                <Finally/>
            </main>
        </div>
    );
};

export default App;
