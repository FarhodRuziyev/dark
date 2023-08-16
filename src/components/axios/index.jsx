import axios from "axios";

export const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
    // baseURL: "https://crudcrud.com/api/4f4f5fd354c24bafa47f80d0e631dc26",
    timeout: 10000,
});