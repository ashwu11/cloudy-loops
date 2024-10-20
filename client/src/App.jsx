import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./views/auth/login"
import AuthRegister from "./views/auth/register"
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./views/admin/dashboard";
import AdminFeatures from "./views/admin/features";
import AdminOrders from "./views/admin/orders";
import AdminProducts from "./views/admin/products";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* components */}
      <h1>I'm a component!</h1>

      {/* routes */}
      <Routes>
        {/* authentication */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />}></Route>
          <Route path="register" element={<AuthRegister />}></Route>
        </Route>

        {/* admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
