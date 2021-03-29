import Matrix from "../Matrix"
import EntryForm from "../EntryForm"

import "./Dashboard.scss"

import { useState, useEffect } from "react"

const Dashboard = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const getEntries = async () => {
      const entriesFromServer = await fetchEntries()
      setEntries(entriesFromServer)
    }
    getEntries()
  }, [])

  const fetchEntries = async () => {
    const result = await fetch("http://localhost:5000/entries")
    const data = await result.json()
    return data
  }

  const addMatrixEntry = async (entry) => {
    const result = await fetch("http://localhost:5000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    })
    const data = await result.json()
    setEntries([...entries, data])
  }

  const deleteMatrixEntry = async (id) => {
    await fetch(`http://localhost:5000/entries/${id}`, { method: "DELETE" })

    setEntries(entries.filter((entry) => entry.id !== id))
  }

  return (
    <>
      <EntryForm onAdd={addMatrixEntry} />
      <Matrix rows={entries} onDelete={deleteMatrixEntry} />
    </>
  )
}

export default Dashboard
