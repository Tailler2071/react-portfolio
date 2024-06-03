import s from "./s.module.scss";
import Nav from "../../components/Nav";
import Links from "../../components/Links";
import AboutUs from "../../components/AboutUs";
import Experience from "../../components/Experience";
import Technologies from "../../components/Technologies";
import Projects from "../../components/Projects";
import Finally from "../../components/Finally";
import Footer from "../../components/Footer";
import Background from "../../components/Background";
import StringToSpans from "../../components/StringToSpans";


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

                />
                <Footer/>
            </main>

            <Background/>

        </div>
    );
};

export default Home;