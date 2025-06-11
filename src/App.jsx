import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import HomeUts from "./pages/HomeUts";
import NavbarUts from "./components/NavbarUts";
import ContactUts from "./pages/ContactUts";


const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const NotFound400 = React.lazy(() => import("./pages/NotFound400"));
const NotFound401 = React.lazy(() => import("./pages/NotFound401"));
const NotFound403 = React.lazy(() => import("./pages/NotFound403"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const Users = React.lazy(() => import("./pages/Users"));
const MenuUts = React.lazy(() => import("./pages/MenuUts"));  // hanya ini untuk MenuUts

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* ========== ROUTE UTS ========== */}
        {/* <Route path="/" element={<HomeUts />} />
        <Route path="/menu" element={<MenuUts />} />
        <Route path="/contact" element={<ContactUts />} /> */}
        {/* <Route path="/about" element={<AboutUts />} /> */}

        {/* Layout utama */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/400" element={<NotFound400 />} />
          <Route path="/401" element={<NotFound401 />} />
          <Route path="/403" element={<NotFound403 />} />
        </Route>

        {/* Layout autentikasi */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Route fallback */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;
