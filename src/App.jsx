import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Authentication from "./components/Authentication/Authentication";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Routes>
      {/* For converting Default Route to /login */}
      <Route path="/" element={<Navigate to="/login" />}></Route>
      <Route path="/signup" element={<Authentication type="SignUp" />}></Route>
      <Route path="/login" element={<Authentication type="Login" />}></Route>
      <Route
        path="/home"
        element={<ProtectedRoutes Component={Home} />}
      ></Route>

      {/* Common route for error page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
