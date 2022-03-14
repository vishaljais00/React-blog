import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Topbar from "./components/Topbar/Topbar";
import {Context} from "./context/Context";



function App() {

  const {user} = useContext(Context)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Topbar />}>
        <Route path="post/:postId" element={<Single />} />

        <Route index element={ user?<Home/>: <Register />}/>
        <Route path="settings" element={ user?<Settings/>: <Register />} />
        <Route path="Write" element={ user?<Write/>: <Register />} />
        <Route path="login" element={ user?<Home/>: <Login />} />
        <Route path="register" element={ user?<Home/>: <Register />} />
        <Route path="*" element={ user?<Home/>: <Register />} />


        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
