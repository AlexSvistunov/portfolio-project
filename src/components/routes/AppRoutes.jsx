import { Route, Routes } from "react-router-dom"
import MainPage from "../../pages/MainPage"
import ProjectsPage from "../../pages/ExperiencePage"
import AnimationTest from "../../pages/AnimationTest"
import ExperiencePage from "../../pages/ProjectsPage"


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/experience" element={<ProjectsPage/>}/>
        <Route path="/animation" element={<AnimationTest/>}/>
        <Route path="/projects" element={<ExperiencePage/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes