
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PizzaApp from './PizzaApp';
import Home from './Home';
import './index.css'; 

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const handleLogout = () => {
setIsLoggedIn(false);
};

return (
<Router>
<div className='app-container'>
<Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
<Routes>
<Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
<Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/order" element={isLoggedIn ? <PizzaApp /> : <SignIn setIsLoggedIn={setIsLoggedIn} />} />
</Routes>
</div>

</Router>
);
}


export default App;