import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/displayComponents/AboutUs";
import Forum from "./components/displayComponents/Forum";
import Home from "./components/displayComponents/Home";
import MockTest from "./components/displayComponents/MockTest";
import Nav from "./components/displayComponents/Nav";
import Notes from "./components/displayComponents/Notes";
import Profile from "./components/displayComponents/Profile";
import VideoLec from "./components/displayComponents/VideoLec";
import Login from "./components/displayComponents/Login";
import SignUp from "./components/displayComponents/SignUp";

const App = () => {
  
  return (
    <>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/vidoe_lec" element={<VideoLec/>} />
        <Route exact path="/notes" element={<Notes/>} />
        <Route exact path="/test" element={<MockTest/>} />
        <Route exact path="/forum" element={<Forum/>} />
        <Route exact path="/about_us" element={<AboutUs/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/sign_up" element={<SignUp/>} />
      </Routes>
    </>
  );
};
export default App;
