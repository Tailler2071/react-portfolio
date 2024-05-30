import AboutUs from "./components/AboutUs";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Finally from "./components/Finally";

import "./scss/index.scss";
import s from "./app.module.scss";
import Nav from "./components/Nav";
import Links from "./components/Links";
import Background from "./components/Background";
import Footer from "./components/Footer";

const App = () => {


    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <div>
                    <div className={s.info}>
                        <h1 className={s.title}>Привет, я Александр </h1>
                        <p className={s.text}>Front End Developer</p>
                    </div>
                    <Nav/>
                </div>
                <Links className={s.links}/>
            </header>
            <main className={s.main}>
                <AboutUs className={s.about}/>
                <Experience
                    title={"Мой опыт"}
                    description={
                        "Компании, предоставившие мне возможность работать над разнообразными и увлекательными проектами,\n" +
                        "подарившие мне новый опыт."}
                />
                <Technologies
                    title={"Технологии и инструменты"}
                    description={"Основная облась специализации — FrontEnd  (клиентская часть веб-разработки). Я активно использую различные технологии, фреймворки и библиотеки для решения задач."}
                />
                <Projects
                    title={"Проекты"}
                    description={"Небольшой список, заслуживающий внимания. Коммерческие и личные проекты в которых я принимал участие. "}
                />
                <Finally
                    title={"Что дальше?"}
                    description={"The main area of expertise is front"}
                />
                <Footer/>
            </main>

            <Background/>

        </div>

    );
};

export default App;
