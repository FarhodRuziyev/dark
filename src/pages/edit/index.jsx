import { useContext, useState } from "react";
import { instance } from "../../components/axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import './style.scss';

export default function Edit() {
  const { id } = useParams();
  const [ yedit, setYedit ] = useState({value:"", username:""});
  const [ kateg, setKateg ] = useState({});
  const [ token, setToken ] = useState({});
const FormSubmit = (e) => {
  e.preventDefault();
  instance
  .patch(`products/${id}`,{
    title: yedit.username,
    price: yedit.userprice,
    image: yedit.userimage,
    category: kateg.usercategory,
    Description: yedit.userDescription,
    Rate: yedit.userrate,
    Count: yedit.usercount
  })
  .then(res=>res.json())
  .then(json=>setToken(json))
  console.log("asss"); 
  toast.success("Successfully");
} 
 
  return(
    <>
      <div className="edit">
      <form className="forma" onSubmit={(e) => FormSubmit(e)}>
            <label htmlFor="#">
              Title:
              <input style={{ width: '100%', height: "2rem" }} type="text" placeholder="name" value={yedit.title}
               onChange={(e) => setYedit({...yedit, usersname: e.target.value})} />
            </label><br />
            <label htmlFor="#">
              Price:
              <input style={{ width: '100%', height: "2rem" }} type="number" placeholder="price" value={yedit.price}
               onChange={(e)=>setYedit({...yedit, userprice: e.target.value})} />
            </label><br />
            <label htmlFor="#">
              IMG url:
              <input style={{ width: '100%', height: "2rem" }} type="text" placeholder="url...." value={yedit.image} 
              onChange={(e)=>setYedit({...yedit, userimage: e.target.value})}/>
            </label><br />
            <label htmlFor="#">
             Category
              <select  style={{ width: '100%', height: "2rem" }} value={kateg.category}
                onChange={(e)=>setKateg({...yedit, usercategory: e.target.value})} 
                type="text" placeholder="Electronics" >
                <option value="Electronics" >Electronics</option>
                <option value="Jewelery" >Jewelery</option>
                <option value="Men's clothing" >Men's clothing</option>
                <option value="Women's clothing" >Women's clothing</option>   
              </select> 
            </label><br />
            <label htmlFor="#">
              Description 
              <textarea style={{ width: '100%', height: "4rem" }} 
              onChange={(e)=>setYedit({...yedit, userDescription: e.target.value})} rows={4} placeholder="Description...."/>
            </label><br />
            <label htmlFor="#">Rate
              <input  style={{ width: '100%', height: "2rem" }} type="number"placeholder="Rate"
               value={yedit.Rate} onChange={(e) => setYedit({...yedit, userrate: e.target.value})}/>
            </label><br />
            <label htmlFor="#">Count
              <input  style={{ width: '100%', height: "2rem" }} type="number" placeholder="Count"
               value={yedit.Count} onChange={(e) => setYedit({...yedit, usercount: e.target.value})} />
            </label><br /> <br />
           <button style={{ width: '100%', height: "2rem"}} className="bttn">submit</button> 
      </form>
      </div>
    </>
  )
}