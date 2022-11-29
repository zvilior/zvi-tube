import "../Layout.css";
import { Main } from "./Main";
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from "./Login";
import Register from "./Register";
function Layout() {
  const L = useLocation()
  console.log(L);
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/zvitube" element={<Main />} />
      </Routes>
    </div>
  );
}

export default Layout;
