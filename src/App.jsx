import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./ui/Homepage"
import AppLayout from "./ui/AppLayout"
import Projects from "./ui/Projects"
import Resume from "./ui/Resume"
import Contact from "./ui/Contact"
import About from "./ui/About"

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<AppLayout/>}>
    <Route path="/" element={<Navigate replace to='/home'/>}/>
    <Route path="/home" element={<Homepage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/contact" element={<Contact/>}/>


    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
