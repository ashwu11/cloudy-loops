import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full">
            <div className="lg:flex items-center justify-center bg-black w-1/2 px-12">
                <div className="max-w-md space-y-6 text-center text-primary-foreground">
                    <h1 className="text-3xl font-bold tracking-wide">Welcome, this is the Authentication Layout page!</h1>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                {/* Render child routes */}
                <Outlet /> 
            </div>
        </div>
    );
}

export default AuthLayout;