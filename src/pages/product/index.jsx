import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../components/stete";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../../components/axios";
import "./style.scss";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const nav = useNavigate();
  const { auth, setAtuh } = useContext(UserContext);
  // console.log(product);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    toast.success("Succesfully");
  }, [id]);

  const Del = (id) => {
    console.log(id);
    instance.delete(`products/50`).then((res) => res);
    toast.error("successfully deleted");
    nav(-1);
  };

  return (
    <>
      <div className="container2">
        <div className="product">
          <Link to={"/about"}>LogOut</Link>
          <div className="cardds">
            <div className="fon">
              <img src={product.image} />
            </div>
            <div className="text">
              <div className="titlee">{product.title}</div>
              <div>{product.description}</div>
              <p className="categoryy">{product.category}</p>
              <p className="pricee">
                USD {product.price} $
                <div className="icon">
                  <span>
                    {auth.token ? (
                      <button className="btnn" onClick={() => Del(product.id)}>
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    ) : (
                      ""
                    )}
                  </span>
                  <span>
                    {auth.token ? (
                      <Link to={`/edit/${product?.id}`}>
                          <i class="fa-solid fa-pen-to-square"></i>
                      </Link>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
