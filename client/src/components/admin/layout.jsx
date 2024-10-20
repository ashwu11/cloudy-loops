import AdminHeader from "./header";
import AdminSideBar from "./sidebar";

function AdminLayout() {
    return (
        <div className="flex min-h-screen w-full">
            {/* side bar */}
            <AdminSideBar />
            <div className="flex flex-1 flex-col">
                {/* header */}
                <AdminHeader />
                <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;