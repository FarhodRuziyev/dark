import { useContext, useState } from "react"
import { UserContext } from "../stete"
import { instance } from "../axios";
import { toast } from "react-toastify"; 
import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function Login() {
  const [user, setUser] = useState({ username: "mor_2314", password: "83r5^_" });
  const {auth, setAuth } = useContext(UserContext);
  const nav = useNavigate()
  console.log(auth);

  const Register = (e) => {
    e.preventDefault();
    instance
    .post("auth/login", {
      username: user.username,
      password: user.password,
    })
    .then((res) => setAuth({ name: "", token: res.data.token },
     toast.success("Succesfully")))
    .catch((err) => toast.error("Qayta kiriting"));
    nav('/about')
  }
  
  return(
    <>
      <div className="login">
        <h1>LOGIN PAGES</h1>
        <form  className="form" onSubmit={(e) => Register(e)}>
          <label htmlFor="#" >
            <h2>mor_2314</h2>
          <input type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})} placeholder="username" />
          </label> <br />
          <label htmlFor="#">
            <h2>83r5^_</h2>
          <input type="password" 
            value={user.password}
            onChange={(e) => setUser({ ...user, password : e.target.value})} placeholder="password" />
          </label> <br /> 
          <button><h2><i>LoGiN</i></h2></button>
        </form>
      </div>
    </>
  )
}