import { useState } from "react";

import "./EntryForm.scss";

const EntryForm = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [time, setTime] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Please add text");
            return;
        }
        if (!time) {
            alert("Please add a time");
            return;
        }
        onAdd({ text, time });
        setText("");
        setTime("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type='text'
                placeholder='Time'
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <input type='submit' placeholder='Add entry'></input>
        </form>
    );
};

export default EntryForm;
