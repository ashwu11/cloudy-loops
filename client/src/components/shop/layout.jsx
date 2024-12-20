import { Outlet } from "react-router-dom"
import ShopHeader from "./header"

function ShopLayout() {
    return ( 
        <div className="flex flex-col bg-white overflow-hidden">
            <ShopHeader />
            <main className="flex flex-col w-full">
                <h1>Shop layout!</h1>
                <Outlet />
            </main>
        </div>
     );
}

export default ShopLayout;