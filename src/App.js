import './App.css';
import React from "react";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Register from "./component-pages/Register";
import Login from "./component-pages/Login";
import AdminLayout from "./component-layouts/AdminLayout";
import UserLayout from "./component-layouts/UserLayout";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header/>
        <div className="row">
          <div className="col-12">
            <Routes>
              <Route path={'register'} element={<Register/>}></Route>
              <Route path={''} element={<Login/>}></Route>
              <Route path='admin/*' element={<AdminLayout/>}/>
              <Route path='user/*' element={<UserLayout/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
