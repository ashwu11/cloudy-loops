import { Navigate, useLocation } from "react-router-dom"

function VerifyAuth({ isAuthenticated, user, children }) {
    const location = useLocation();
    const isOnCheckoutView = location.pathname.indexOf("/checkout") >= 0;
    const isOnLoginView = location.pathname.indexOf("/login") >= 0;
    const isOnRegisterView = location.pathname.indexOf("/register") >= 0;
    const isOnAdminView = location.pathname.indexOf("admin") >= 0;
    const isOnShopView = location.pathname.indexOf("shop") >= 0;
    const isAdminUser = user?.role === "admin";

    if (!isAuthenticated && isOnCheckoutView) {
        return <Navigate to="/auth/login" />;
    }

    if (isAuthenticated && (isOnLoginView || isOnRegisterView)) {
        if (isAdminUser) {
            return <Navigate to="/admin/dashboard" />;
        } else {
            return <Navigate to="/shop/home" />;
        }
    }

    if (isAuthenticated && !isAdminUser && isOnAdminView
    ) {
        return <Navigate to="/restricted" />;
    }

    if (isAuthenticated && isAdminUser && isOnShopView) {
        return <Navigate to="/admin/dashboard" />;
    }

    return <>{ children }</>;
}

export default VerifyAuth;