import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
}from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messanger from "./pages/messanger/Messenger";
function App() {
  const { user } = useContext(AuthContext);
  return (
   <>
   <Router>
   <Routes>
    <Route exact path="/" element= {user ? <Home /> : <Register />}></Route>
    <Route exact path="/login" element={user ? <Navigate to="/" replace /> : <Login />}></Route>
    <Route exact path="/register" element={user ? <Navigate to="/" replace /> : <Register />}></Route>
    <Route exact path="/messenger" element={!user ? <Navigate to="/" replace /> : <Messanger />}></Route>
    <Route exact path="/profile/:username" element={<Profile/>}></Route>
   </Routes>
   </Router>
   </>
  );
}

export default App;
