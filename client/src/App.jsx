import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./views/auth/login"
import AuthRegister from "./views/auth/register"

function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* components */}
      <h1>I'm a component!</h1>

      {/* routes */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {/* children routes */}
          <Route path="/login" element={<AuthLogin />}></Route>
          <Route path="/register" element={<AuthRegister />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
