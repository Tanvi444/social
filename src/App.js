import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
function App() {
  return (
   <>
   <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path="/register" element={<Register/>}></Route>
    <Route exact path="/profile" element={<Profile/>}></Route>
   </Routes>
   </>
  );
}

export default App;
