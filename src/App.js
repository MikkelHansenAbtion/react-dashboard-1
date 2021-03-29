import Header from "./components/Header"
import Footer from "./components/Footer"
import Matrix from "./components/Matrix"
import EntryForm from "./components/EntryForm"
import { useState, useEffect } from "react"

import "./assets/reset.scss"
import "./assets/global.scss"

function App() {
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
    <div className="content">
      <Header />
      <EntryForm onAdd={addMatrixEntry} />
      <Matrix rows={entries} onDelete={deleteMatrixEntry} />
      <Footer />
    </div>
  )
}

export default App
