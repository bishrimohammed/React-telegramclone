import "./index.css";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Routes>
      <Route exact path="/" element={user ? <Homepage /> : <Login />}></Route>
      <Route
        path="/login"
        exact
        element={user ? <Homepage /> : <Login />}
      ></Route>{" "}
      <Route
        path="/register"
        element={user ? <Homepage /> : <Register />}
      ></Route>{" "}
    </Routes>
  );
}

export default App;
