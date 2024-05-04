import { Route, Routes } from "react-router-dom"
import MainPage from "../../pages/MainPage"
import ProjectsPage from "../../pages/ProjectsPage"


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes