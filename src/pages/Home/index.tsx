import Nav from "../../components/Nav";
import Links from "../../components/Links";
import AboutUs from "../../components/AboutUs";
import Experience from "../../components/Experience";
import Technologies from "../../components/Technologies";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Background from "../../components/Background";
import StringToSpans from "../../components/StringToSpans";
import s from "./s.module.scss";

const Home = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <header className={s.header}>
                    <div>
                        <div className={s.info}>
                            <h1 className={s.title}>
                                <div className={s.hello}>
                                    <StringToSpans text={"Привет, я"}/>
                                </div>
                                <div className={s.name}>
                                    <StringToSpans text={"Александр"}/>
                                </div>
                                <div className={s.emoji}>&#128572;</div>
                            </h1>
                            <p className={s.text}>Front End Developer</p>
                        </div>
                        <Nav/>
                    </div>
                    <Links className={s.links}/>
                </header>
            </div>
            <main className={s.main}>
                <AboutUs className={s.about}/>
                <Experience
                    title={"Мой опыт"}
                    description={
                        "Компании, предоставившие мне возможность работать над разнообразными и увлекательными проектами."}
                />
                <Technologies
                    title={"Технологии и инструменты"}
                    description={"Основная облась специализации — Front End  (клиентская часть веб-разработки). Я активно использую различные технологии, фреймворки и библиотеки для решения задач."}
                    className={s.technologies}
                />
                <Projects
                    title={"Проекты"}
                    description={"Небольшой список, заслуживающий внимания. Коммерческие и личные проекты в которых я принимал участие. "}
                />
                <Footer title={"Что дальше?"}/>
            </main>
            <Background/>
        </div>
    );
};

export default Home;