import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import "./scss/index.scss";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={< Home/>}/>
            <Route path="/projects" element={< ProjectsPage/>}/>
        </Routes>
    );
};

export default App;
