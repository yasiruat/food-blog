import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>

  );
}

export default App;
