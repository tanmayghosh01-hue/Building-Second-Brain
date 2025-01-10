import { Signin } from "./pages/Signin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
