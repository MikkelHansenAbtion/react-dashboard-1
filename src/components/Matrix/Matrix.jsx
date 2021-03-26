import "./Matrix.scss";

const entries = [
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
];

const Matrix = () => {
    return (
        <table className='matrix'>
            <tr>
                <th>Id</th>
                <th>Text</th>
                <th>Time</th>
            </tr>
            {entries.map((entry) => (
                <tr>
                    <td>{entry.id}</td>
                    <td>{entry.text}</td>
                    <td>{entry.time}</td>
                </tr>
            ))}
        </table>
    );
};

export default Matrix;
