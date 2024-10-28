import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AppLayout from "./ui/AppLayout"


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<AppLayout/>}>
    <Route path="/" element={<Navigate replace to='/home'/>}/>
    <Route path="/home" element={<Homepage/>}/>
   

    </Route>
    
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
