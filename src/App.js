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
import Edit from "./components/displayComponents/Edit";

const App = () => {
  
  return (
    <>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route exact={true} path="/" element={<Home/>} />
        <Route exact={true} path="/video_lec" element={<VideoLec/>} />
        <Route exact={true} path="/notes" element={<Notes/>} />
        <Route exact={true} path="/test" element={<MockTest/>} />
        <Route exact={true} path="/forum" element={<Forum/>} />
        <Route exact={true} path="/about_us" element={<AboutUs/>} />
        <Route exact={true} path="/profile" element={<Profile/>} />
        <Route exact={true} path="/profile/edit" element={<Edit/>} />
        <Route exact={true} path="/login" element={<Login/>} />
        <Route exact={true} path="/sign_up" element={<SignUp/>} />
      </Routes>
    </>
  );
};
export default App;
