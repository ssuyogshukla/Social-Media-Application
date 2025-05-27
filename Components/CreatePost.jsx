import { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";

function CreatePost() {

    const userIdElement=useRef();
    const postTilteElement=useRef();
    const postBodyElement=useRef();
    const reactionsElement=useRef();
    const tagsElement=useRef();

      const{addPost}=useContext(PostList);      {/*sending  the data addPost method*/}

    const handleSubmit=(event)=>{
       event.preventDefault();
      const userId=userIdElement.current.value;
      const postTitle=postTilteElement.current.value;
      const postBody=postBodyElement.current.value;
      const reactions=reactionsElement.current.value;
      const tags=tagsElement.current.value.split(' ');
        
      userIdElement.current.value="";
      postTilteElement.current.value="";
      postBodyElement.current.value="";
      reactionsElement.current.value="";
      tagsElement.current.value="";
      addPost(userId,postTitle,postBody,reactions,tags)
    }
    return (  
        <form className="create-post" onSubmit={handleSubmit}>   {/*submitting the data handleSubmit*/}
        <div className="mb-3">
          <label htmlFor="userID" className="form-label">Enter your User id here</label>
          <input type="text" ref={userIdElement} className="form-control" id="title" placeholder="Your user-Id"/>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text"   ref={postTilteElement}  className="form-control" id="title" placeholder="How are you feeling today"/>
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea type ="text" ref={postBodyElement} rows={3} className="form-control" id="title" placeholder="Tell us About you."/>
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">Number of reaction</label>
          <input type="number"  ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to the post"/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Enter your  tag</label>
          <input type="text" ref={tagsElement} className="form-control" id="tag" placeholder=" plse enter your tag using space"/>
        </div>

 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
 );
}

export default CreatePost;