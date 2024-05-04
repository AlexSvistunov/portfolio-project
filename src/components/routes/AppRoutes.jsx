import { Route, Routes } from "react-router-dom"
import MainPage from "../../pages/MainPage"


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes