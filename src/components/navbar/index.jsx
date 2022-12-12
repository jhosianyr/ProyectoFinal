import {Link, Route, Routes} from "react-router-dom"
import Home from "../../views/home.jsx"
import Benefit from './../../views/benefit.jsx'
import Dior from './../../views/dior.jsx'
import Nyx from './../../views/nyx.jsx'
import Revlon from './../../views/revlon.jsx'
import Maybelline from './../../views/maybelline.jsx'


const NavBar = () => {
    return (
        <div>
            <nav className="Navbar">
                <article className="Navbar__container">
                    <Link className="Navbar__text" to="/benefit">BENEFIT</Link>
                    <Link className="Navbar__text" to="/dior">DIOR</Link>
                    <Link className="Navbar__text" to="/maybelline">MAYBELLINE</Link>
                    <Link className="Navbar__text" to="/nyx">NYX</Link>
                    <Link className="Navbar__text" to="/revlon">REVLON</Link>
                    
                </article>
            </nav>
                 <Routes>
                 <Route path="/" element = {<Home/>}/>
                 <Route path="/benefit" element= {<Benefit/>}/>        
                 <Route path="/dior" element= {<Dior/>}/>
                 <Route path="/maybelline" element= {<Maybelline/>}/>      
                 <Route path="/nyx" element= {<Nyx/>}/>
                 <Route path="/revlon" element= {<Revlon/>}/>
                 
                 </Routes>
        </div>

            
    );
}

export default NavBar
