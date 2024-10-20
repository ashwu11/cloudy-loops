import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./views/auth/login"
import AuthRegister from "./views/auth/register"
import AdminLayout from "./components/admin/layout"
import AdminDashboard from "./views/admin/dashboard"
import AdminFeatures from "./views/admin/features"
import AdminOrders from "./views/admin/orders"
import AdminProducts from "./views/admin/products"
import ShopLayout from "./components/shop/layout"
import ShopHome from "./views/shop/home"
import ShopAccount from "./views/shop/account"
import ShopProducts from "./views/shop/products"
import ShopCheckout from "./views/shop/checkout"
import VerifyAuth from "./components/common/verify-auth"
import Restricted from "./views/unhappy-path/restricted"
import PageNotFound from "./views/unhappy-path/not-found"

function App() {
  const isAuthenticated = true;
  const mockUser = {
    name : "cloudy",
    role : "user"
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* components */}

      {/* routes */}
      <Routes>
        {/* default */}
        <Route path="/" element={<ShopLayout />} />

        {/* authentication */}
        <Route path="/auth" element={
          <VerifyAuth isAuthenticated={isAuthenticated} user={mockUser}>
            <AuthLayout />
          </VerifyAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* admin */}
        <Route path="/admin" element={
          <VerifyAuth isAuthenticated={isAuthenticated} user={mockUser}>
            <AdminLayout />
          </VerifyAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* shop */}
        <Route path="/shop" element={
          <VerifyAuth isAuthenticated={isAuthenticated} user={mockUser}>
            <ShopLayout />
          </VerifyAuth>
        }>
          <Route path="home" element={<ShopHome />} />
          <Route path="account" element={<ShopAccount />} />
          <Route path="products" element={<ShopProducts />} />
          <Route path="checkout" element={<ShopCheckout />} />
        </Route>

        {/* unhappy path */}
        <Route path="/restricted" element={<Restricted />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
