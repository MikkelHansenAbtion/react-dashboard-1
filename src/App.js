import Header from "./components/Header"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"

import "./assets/reset.scss"
import "./assets/global.scss"

function App() {
  return (
    <div className="content">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App
