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
        <div className='matrix'>
            {entries.map((entry) => (
                <p>
                    Id: {entry.id}, text: {entry.text}, Time: {entry.time}
                </p>
            ))}
        </div>
    );
};

export default Matrix;
