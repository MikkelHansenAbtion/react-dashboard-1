import Header from "./components/Header";
import Footer from "./components/Footer";
import Matrix from "./components/Matrix";
import EntryForm from "./components/EntryForm";
import { useState } from "react";

import "./assets/reset.scss";
import "./assets/global.scss";

function App() {
    const [entries, setEntries] = useState([
        {
            id: 1,
            text: "One",
            time: "Yesterday",
        },
        {
            id: 2,
            text: "Two",
            time: "Today",
        },
        {
            id: 3,
            text: "Three",
            time: "Tomorrow",
        },
    ]);

    const AddMatrixEntry = (entry) => {
        const id = Math.floor(Math.random() * 100) + 1;
        const newEntry = {
            id: id,
            ...entry,
        };
        console.log(id);
        setEntries([...entries, newEntry]);
    };

    // const DeleteMatrixEntry = (id) => {
    //     console.log(id);
    // };

    return (
        <>
            <Header />
            <div className='content'>
                <EntryForm onAdd={AddMatrixEntry} />
                <Matrix rows={entries} />
            </div>
            <Footer />
        </>
    );
}

export default App;
