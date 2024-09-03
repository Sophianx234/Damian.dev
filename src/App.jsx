import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AppLayout from "./ui/AppLayout"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"

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
    <Route path="*" element={<PageNotFound/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
