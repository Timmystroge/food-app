import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage";
import RegisterPage from "./Components/Pages/RegisterPage";
import LoginPage from "./Components/Pages/LoginPage";
import Forgotpassword from "./Components/Pages/Forgotpassword";
import Dashboard from "./Components/Pages/dashboard/Dashboard";
import Error404 from "./Components/Pages/Error404";
import ProtectedAuth from "./Components/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/signup" element={<RegisterPage />}></Route>
          <Route
            exact
            path="/forgotpassword"
            element={<Forgotpassword />}
          ></Route>
          <Route element={<ProtectedAuth />}>
            <Route
              path="/Components/Pages/dashboard/Dashboard"
              element={<Dashboard />}
            ></Route>
          </Route>
          <Route exact path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
