import React from "react";
import NavBar from "../components/NavBar";
import {Route, Routes} from "react-router-dom";
import User from "../component-pages/User";
import ProductDetail from "../component-pages/ProductDetail";
import Cart from "../component-pages/Cart";

export default function UserLayout() {
    return (
        <>
            <div className="container-fluid">
                <NavBar/>
                <div className="row">
                    <div className="col-12">
                        <Routes>
                            <Route path={''} element={<User/>}/>
                            <Route path={'detail/:id'} element={<ProductDetail/>}/>
                            <Route path={'cart/:id'} element={<Cart/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};