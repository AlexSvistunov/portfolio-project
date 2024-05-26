import { Route, Routes } from "react-router-dom"
import MainPage from "../../pages/MainPage"
import ProjectsPage from "../../pages/ProjectsPage"
import AnimationTest from "../../pages/AnimationTest"
import ExperiencePage from "../../pages/ExperiencePage"


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/animation" element={<AnimationTest/>}/>
        <Route path="/experience" element={<ExperiencePage/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes