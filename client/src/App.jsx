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
import PageNotFound from "./views/page-not-found"
import ShopHome from "./views/shop/home"
import ShopAccount from "./views/shop/account"
import ShopProducts from "./views/shop/products"
import ShopCheckout from "./views/shop/checkout"

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* components */}
      <h1>I'm a component!</h1>

      {/* routes */}
      <Routes>
        {/* authentication */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* shop */}
        <Route path="/shop" element={<ShopLayout />}>
          <Route path="home" element={<ShopHome />} />
          <Route path="account" element={<ShopAccount />} />
          <Route path="products" element={<ShopProducts />} />
          <Route path="checkout" element={<ShopCheckout />} />
        </Route>

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
