import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../components/stete';
import { toast } from "react-toastify"; 
import './style.scss';
export default function Products() {
    const {categ} = useParams();
    const [products, setProducts] = useState([]);
    const {auth, setAuth} = useContext(UserContext)
    // console.log(products);
   
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${categ}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
            toast.success("Successfully");
    }, [categ])

    return(
        <>
        <div className='productslar'>
            <div className='container1'>
                <div className='cards'>
                    {products?.map((p)=>(
                        <div className='card'>
                            <Link to={`/categ/${p?.id}`} key={p.id}>
                            <img src={p?.image} alt="#"/>
                            <h3 className='titl'>{p?.title.slice(0,25)}...</h3>
                            <i>{p?.description.slice(0,22)}...</i>
                            <h3>{p?.category}</h3></Link>   
                            <p className='pric'>USD {p?.price} $  
                            <span><Link to={ auth.token? `/categ/${p?.id}` : "/login" }><button  className='btn'> buy</button></Link> </span>
                            </p>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}