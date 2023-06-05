import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import "./App.css";
import { Route, Routes } from "react-router";
import Signup from "./components/Forms/Signup/Signup";
import Login from "./components/Forms/Login/Login";
import ProviderHomepPage from "./Pages/ProviderHomePage/ProviderHomepPage";
import AddJob from "./components/AddJob/AddJob";
import Applicants from "./components/Applicants/Applicants";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allJobs" element={<ProviderHomepPage />} />
        <Route path="/addJob" element={< AddJob/>} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
      {/* <ProviderHomepPage/> */}
    </>
  );
};

export default App;
