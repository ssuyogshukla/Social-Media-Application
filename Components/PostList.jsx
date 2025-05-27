import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./Welcome";
import LoadingState from "./Loading_State";

const PostListComponent = () => {
    const { postList, addInitialPosts } = useContext(PostListData);


    const [fetching, setFetcting] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setFetcting(true);
        fetch("https://dummyjson.com/posts", { signal })ear
            .then((res) => res.json())
            .then(data => {
                addInitialPosts(data.posts)
                setFetcting(false);
            })
        return () => {
            controller.abort();
            console.log("Cleaning")
        }
    }, []);



    /* Bu using UseState*/
    //    const[dataFetched,setdataFetched]=useState(false);
    //    if(!dataFetched){
    //     fetch('http://dummyjson.com/posts')
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         addInitialPosts(data.posts)
    //     })
    //    }


    return (
        <>

            {fetching && <LoadingState />}
            {!fetching && postList.length === 0 && (<WelcomeMessage />)}
            {!fetching && postList.map((post) => (<Post key={post.id} post={post} />))}
        </>);
}

export default PostListComponent;