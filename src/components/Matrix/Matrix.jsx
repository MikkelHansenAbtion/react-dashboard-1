import "./Matrix.scss"

const Matrix = ({ rows, onDelete }) => {
  return (
    <table className="matrix">
      <thead>
        <tr>
          <th>Id</th>
          <th>Text</th>
          <th>Time</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows.map((entry) => (
            <tr key={("tr_", entry.id)}>
              <td>{entry.id}</td>
              <td>{entry.text}</td>
              <td>{entry.time}</td>
              <td onClick={() => onDelete(entry.id)}>
                <i className="clickable">&#10006;</i>
              </td>
            </tr>
          ))
        ) : (
          <tr key="tr_noresult">
            <td colspan="4">NO ENTRIES</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Matrix
