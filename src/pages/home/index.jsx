import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ModeContext } from "../../components/stete";


import './home.scss';
export default function Home() {
    const { mode, setMode } = useContext(ModeContext);
    return(
        <>
            <div className={ mode ? "yellow" : "oq"}>
                <button onClick={() => setMode(!mode)}>
                    {/* {mode ? "Login" : "Logout"} */}
                    mode
                </button>
                <h1>Home pages</h1>
            </div>   
        </>
    )
}