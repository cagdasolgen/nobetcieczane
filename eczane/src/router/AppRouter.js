import React from 'react'
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>

<Router>
  
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />
</Routes>

</Router>

    </div>

  )
}

export default AppRouter