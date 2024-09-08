import React from "react";
import Admin from "../component-pages/Admin";
import Cart from "../component-pages/Cart";
import Category from "../component-pages/Category";
import NavBar from "../components/NavBar";
import {Link, Route, Routes} from "react-router-dom";
import Create from "../components/Create";
import Update from "../components/Update";
import UpdateCategory from "../component-category/UpdateCategory";
import CreateCategory from "../component-category/CreateCategory";

export default function AdminLayout() {
    return (
        <>
            <div className="container-fluid">
                <NavBar/>
                <div className="row">
                    <div className="col-2 mt-5">
                        <Link to={''}>Admin Home</Link><br/>
                        <Link to={'category'}>Category</Link><br/>
                        <Link to={'create'}>Create Product</Link><br/>
                        <Link to={'cart'}>Cart</Link><br/>
                    </div>
                    <div className="col-10 mt-3">
                        <Routes>
                            <Route path={''} element={<Admin/>}/>
                            <Route path={'cart'} element={<Cart/>}/>>
                            <Route path={'category'} element={<Category/>}/>
                            <Route path={'category/update/:id'} element={<UpdateCategory/>}/>
                            <Route path={'category/create'} element={<CreateCategory/>}/>
                            <Route path={'create'} element={<Create/>}/>
                            <Route path={'update/:id'} element={<Update/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};