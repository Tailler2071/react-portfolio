import s from "./s.module.scss";

const Background = () => {
    const spansArray = Array.from({length: 50}, (_, index) => (
        <span key={index}></span>
    ));

    return (
        <div className={s.background}>
            {spansArray}
        </div>
    );
};

export default Background;
