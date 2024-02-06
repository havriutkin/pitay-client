import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import LessonForm from "./pages/LessonForm";
import LessonJoin from "./pages/LessonJoin";

/*
  TODO implement redux authSlicer, questionSlicer, lessonSlicer
  TODO implement navigation between routes
*/

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/createLesson" element={<LessonForm/>}></Route>
          <Route path="/joinLesson" element={<LessonJoin/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
