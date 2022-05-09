import './Content.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";

import About from "../../../views/About";
import Home from "../../../views/Home";
import Param from "../../../views/Param";
import Notfound from "../../../views/NotFound";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/param/:id" element={<Param />} />

            <Route path="*" element={< Notfound />} />
        </Routes>
    </main>
)

export default Content