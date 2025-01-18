import { Signin } from "./pages/Signin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/DashBoard";
import { useState } from "react";

function App() {
  const [name, setName] = useState()
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin setName={setName} />} />
          <Route path="/dashboard" element={<Dashboard name={name} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
