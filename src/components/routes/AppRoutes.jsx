import { Route, Routes } from "react-router-dom"
import MainPage from "../../pages/MainPage"
import ProjectsPage from "../../pages/ProjectsPage"
import AnimationTest from "../../pages/AnimationTest"


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/animation" element={<AnimationTest/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes