import React from "react";
import s from "./s.module.scss";

interface StringToSpansProps {
    text: string;
}

const StringToSpans = ({text}: StringToSpansProps) => {
    return text.split("").map((char, index) => (
        <React.Fragment key={index}>
            {char === " " ? <span>&nbsp;</span> : <span className={s.char}>{char}</span>}
        </React.Fragment>
    ));
};

export default StringToSpans;
