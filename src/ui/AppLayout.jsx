import { Outlet } from "react-router-dom"
import Header from "./Header"

function AppLayout() {
    return (
        <div className="">
            <nav >
                <Header/>
            </nav>
            <main >
                <Outlet/>
            </main>
        </div>
    )
}

export default AppLayout
