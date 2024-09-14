import './App.css'
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className={''}>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
            </Routes>
        </div>
    )
}

export default App
