import { Link, NavLink, useNavigate } from "react-router-dom";
import { ModeContext, UserContext } from "../stete";
import { useContext } from "react";
import './navbar.scss';

export default function Navbar() {
    const { mode, setMode } = useContext(ModeContext);
    const { auth, setAuth } = useContext(UserContext);
    const nav = useNavigate()
    console.log(mode);
    return(
        <>
        <div className="navbar">
            <div className="container">
                <div className="logotip"> <h1 className="logo"><i>MyLoGo </i> </h1>
                <button className="btnmod" onClick={()=>setMode(!mode)}>mode</button>
                </div>
                <input type="checkbox" id="ok" />
                <ul className="ull">
                    <label for="ok" id="x">X</label>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><Link to={"/about"}>About</Link></li>
                    {auth.token &&  <li><Link to={"/protect"}>Protect</Link></li>}
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <button className="btnn" onClick={() => setAuth(!auth)}>
                        {auth ? <button>
                        logout 
                        </button> : <button  onClick={()=>nav("/login")}>
                        login
                        </button> }
                        {/* mode */}
                    </button>
                </ul>
                <label for="ok" id="bars"><i class="fa-solid fa-bars"></i></label>  
            </div>
        </div>   
        </>
    )
}