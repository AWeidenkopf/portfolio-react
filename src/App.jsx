import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import NavBar from './Components/NavBar/NavBar'
import ProjectDetails from './Pages/Projects/ProjectDetails'

// import styles from './App.module.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='contact'
          element={<Contact />}
        />

        <Route
          path='projects/:projectDetails'
          element={<ProjectDetails />}
        />
      </Routes>
    </>
  )
}

export default App
