import { use, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-list-store";
function Post({post}) {
  const {deletePost}=useContext(PostList);
   const tags = post.tag || [];
   
    return ( 
        <div className="card post-card" style={{width: "30rem"}}>
        <div className="card-body">
        <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
     <MdDelete />
    
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {tags.map((tag)=><span key={tag} className="badge text-bg-primary hastag">{tag}</span>)}
      <div className="alert alert-success  reactions" role="alert">
        This post is Reacted by {post.reaction} {post.reaction === 1 ? "person" : "people"}
       </div>
  
  
  </div>
</div>
     );
}

export default Post;