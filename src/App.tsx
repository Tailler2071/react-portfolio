import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contacts from "./components/contacts";
import "./scss/index.scss";

const App = () => {


    return (
        <>
            <Skills title={"Technologies and tools"}/>
            <Portfolio title={"Portfolio"}/>
            <Contacts/>
        </>
    );
};

export default App;
