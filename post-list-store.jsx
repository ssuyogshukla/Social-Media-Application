
import { createContext, useReducer } from "react";


   
   export const PostList=createContext({  // context Api
         postList:[],
         addPost:()=>{},
         deletePost:()=>{},
         addInitialPosts:()=>{}
   });    
 const PostListProvider=({children})=>{

   const postListReducer=(currentPost,action)=>{
       let  newPostList=currentPost;
      if(action.type==='delete_post'){
       newPostList=currentPost.filter(post=>post.id !==action.payload.postId)
      }
      else if(action.type==='add_Initial_lists'){
         newPostList= action.payload.posts;
      }
      else if(action.type==='add_list'){
          newPostList= [ action.payload,...currentPost ]
      }
     
      
       return newPostList;
   }
   
    const[postList,dispatchPostList]= useReducer(postListReducer,[]);

    const addPost=(userId,postTitle,postBody,reactions,tags)=>{    {/* this data take from the Create Post for adding the new entry in post*/ }
         dispatchPostList({                       
            type:'add_list',
            payload:{
               id:Date.now(),
               title:postTitle,
               body:postBody,
               reaction:reactions,
               userId:userId,
               tag:tags
            }
         })
      }
      const addInitialPosts=(posts)=>{
          dispatchPostList({                      /*  from fetching data from server&dummpy Api*/ 
            type:'add_Initial_lists',
            payload:{
               posts
            }
         })
      }

    const deletePost=(postId)=>{
      dispatchPostList({
         type:'delete_post',
         payload:{
            postId
         }
      })
    }


    return (
      <PostList.Provider value={{postList, addPost,  deletePost , addInitialPosts}}>
       {children}
       </PostList.Provider>
    )
 }
 

 export default PostListProvider;