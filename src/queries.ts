import { useQuery } from "@tanstack/react-query"
import { getAllPost,getPostBySearch, getPostBySorting } from "./api"

export const useGetAllPost = ()=>{
  const {data} = useQuery({
    queryKey:["AllPosts"],
    queryFn:async()=>{
        const response = await getAllPost()
        return response.data
    }
  })
  return {data}
}

export const useGetPostBySearch
 = ()=>{
    const {data} = useQuery({
      queryKey:["SearchedPost"],
      queryFn:async()=>{
          const response = await getPostBySearch()
          return response.data
      }
    })
    return {data}
  }

  export const useGetPostBySorting
 = ()=>{
    const {data} = useQuery({
      queryKey:["SearchedPost"],
      queryFn:async()=>{
          const response = await getPostBySorting()
          return response.data
      }
    })
    return {data}
  }
  