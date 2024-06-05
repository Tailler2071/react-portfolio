import s from "./s.module.scss";
import {Link} from "react-router-dom";
import ArrowIcon from "../../assets/svg/common/arrow-left.svg?react";
import Background from "../../components/Background";
import Table from "../../components/Table";

const ProjectsPage = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <Link className={s.link} to={"/"}>
                    <ArrowIcon/>
                    <span> Назад </span>
                </Link>
                <h1 className={s.title}>Все проекты</h1>
                <Table/>
            </div>
            <Background/>
        </div>
    );
};

export default ProjectsPage;