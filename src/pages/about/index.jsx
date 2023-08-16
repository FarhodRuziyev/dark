import { useEffect, useState, useContext  } from "react";
import { Link } from "react-router-dom";
import { ModeContext} from "../../components/stete"; 
import './style.scss';
export default function About() {
    const { mode, setMode } = useContext(ModeContext);
    const [categ, setCateg] = useState([]);
    
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCateg(json)) 
    },[]);
   
    return(
        <>
        <div className={mode == "light" ? "dark" : "light"}>
            <div className="aboutbox">
                <div className="category">
                    {categ?.map((item)=> 
                        <Link to={`/${item}`}><h2 className="heding2">{item}</h2> </Link>
                    ) } 
                </div>
                <div className="aboutlogo">
                    <h1 className="hed1">About pages</h1>
                </div>
                <button onClick={() => setMode()}>
                    {mode}
                </button>
            </div>
        </div>  
        </>
    )
}