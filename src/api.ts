import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
})

export const getAllPost = ()=>{
    return api.get("/posts")
}

export const getPostBySearch = ()=>{
    return api.get("/posts/search?q=love")
}

export const getPostBySorting = ()=>{
    return api.get("/posts?sortBy=title&order=asc")
}