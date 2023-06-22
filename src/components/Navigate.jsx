import React from "react";
import { Router,Routes,Route } from "react-router-dom";

function Navigate(){
    return <Router>
        <Routes>
            <Route exact path="/">HOME</Route>
        </Routes>
    </Router>
}