import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import LessonForm from "./pages/LessonForm";
import LessonJoin from "./pages/LessonJoin";
import Profile from "./pages/Profile";
import Header from "./components/Header";


/*
  TODO implement redux authSlicer, questionSlicer, lessonSlicer
  TODO implement navigation between routes
*/

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/lesson/create" element={<LessonForm/>}></Route>
          <Route path="/lesson/join" element={<LessonJoin/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
