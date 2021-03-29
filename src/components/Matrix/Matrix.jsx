import "./Matrix.scss"

const Matrix = ({ rows, onDelete }) => {
  return (
    <table className="matrix">
      <thead>
        <tr>
          <th>Id</th>
          <th>Text</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((entry) => (
          <tr key={("key_", entry.id)}>
            <td>{entry.id}</td>
            <td>{entry.text}</td>
            <td>{entry.time}</td>
            <td onClick={() => onDelete(entry.id)}>DELETE</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Matrix
