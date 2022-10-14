import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/user.js";
import { useContext, useEffect } from "react";
import CheckNationalId from "./components/CheckNationalId.js";

const App = () => {
  const { isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (!isLoggedIn)
      if (localStorage.getItem("authorization-token"))
        console.log("logining in");
    console.log("please login");
  }, []);
  return (
    <Routes>
      <Route exact path="/checkNationalId" element={<CheckNationalId />} />
      <Route
        exact
        path="/login/user"
        element={isLoggedIn ? <Home /> : <Home />}
      />
      <Route
        exact
        path="/login/admin"
        element={isLoggedIn ? <Home /> : <Home />}
      />
      <Route path="/" element={isLoggedIn ? <Home /> : <Home />} />
      <Route path="/*" element={isLoggedIn ? <Home /> : <Home />} />
    </Routes>
  );
};

export default App;
