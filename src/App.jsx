import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import ProjectDetails from './Pages/Projects/ProjectDetails'
import { useState } from 'react'

// import styles from './App.module.css'

function App() {

  const [detailsPage, setDetailsPage] = useState(false)


  return (
    <>
      <NavBar detailsPage={detailsPage} setDetailsPage={setDetailsPage}/>
      <Routes>
        <Route
          path='/'
          element={<Home setDetailsPage={setDetailsPage} />}
        />

        <Route
          path='projects/:projectDetails'
          element={<ProjectDetails/>}
        />
      </Routes>
    </>
  )
}

export default App
