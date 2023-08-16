import { useContext, useState } from "react";
import { instance } from "../../components/axios";
import { UsersContext , } from "../../components/stete";
import { toast } from "react-toastify"; 
import { Button, Input, Select} from 'antd';
import "./style.scss";

export default function Protect() {
  const { users, setUsers } = useContext(UsersContext);
  const [ admin, setAdmin ] = useState({});
  const { TextArea } = Input;
  const Submit = (e) =>{
    e.preventDefault();
    instance
    .put("/products/333",{
      name: admin.usersname,
      price: admin.userprice, 
      image: admin.userimage,
    })
    .then(res=>res.json())
    .then(json=>setUsers(json))
    toast.success("Data yuborildi");
    console.log("abb");
  }
  return(
    <>
      <div className="protect">
        <div className="protect__child">
          <form onSubmit={(e) => Submit(e)}>
            <label htmlFor="#">
              Name:
              <Input type="text" placeholder="name" value={admin.name}
               onChange={(e) => setAdmin({...admin, usersname: e.target.value})} />
            </label><br />
            <label htmlFor="#">
              Price:
              <Input type="number" placeholder="price" value={admin.price}
               onChange={(e)=>setAdmin({...admin, userprice: e.target.value})} />
            </label><br />
            <label htmlFor="#">
              IMG url:
              <Input type="text" placeholder="url...." value={admin.image} 
              onChange={(e)=>setAdmin({...admin, userimage: e.target.value})}/>
            </label><br />
            <label htmlFor="#">
             Category
              <Select  style={{ width: '100%' }} placeholder="Electronics" >
                  <Select.Option  value={admin.Elektronics}
                   onChange={(e)=>setAdmin({...admin, userElektronics: e.target.value})}>Electronics</Select.Option>

                  <Select.Option value={admin.Jewelery}
                   onChange={(e)=>setAdmin({...admin, userJewelery: e.target.value})}>Jewelery</Select.Option>

                  <Select.Option value={admin.userMens}
                   onChange={(e)=>setAdmin({...admin, userMens: e.target.value})}>Men's clothing</Select.Option>

                  <Select.Option value={admin.userWomen} 
                  onChange={(e)=>setAdmin({...admin, userWomen: e.target.value})}>Women's clothing</Select.Option>   
              </Select> 
            </label><br />
            <label htmlFor="#">
              Description 
              <TextArea rows={4} placeholder="Description...."/>
            </label><br />
            <label htmlFor="#">Rate
              <Input  style={{ width: '100%' }} type="number"placeholder="Rate"
               value={admin.userrate} onChange={(e) => setAdmin({...admin, userrate: e.target.value})}/>
            </label><br />
            <label htmlFor="#">Count
              <Input  style={{ width: '100%' }} type="number" placeholder="Count"
               value={admin.usercount} onChange={(e) => setAdmin({...admin, usercount: e.target.value})} />
            </label><br /> <br />
            <Button type="primary" style={{ width: '100%'}}><button className="bttn">submit</button></Button>   
          </form>
        </div>
      </div>
    </>
  ) 
}