import { Outlet } from "react-router-dom"

function AppLayout() {
    return (
        <div>
            
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default AppLayout
