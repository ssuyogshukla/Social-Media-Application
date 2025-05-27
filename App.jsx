import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";
import PostListComponent from "./components/PostList";

function App() {

 const[selectedTab,setSelectedTab]=useState("Home");
 
  return (
     <PostListProvider>
      <div className="app-container">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}
      ></SideBar>
      <div className="content">
      <Header></Header>
      {selectedTab==='Home'? (<PostListComponent></PostListComponent>) :(<CreatePost></CreatePost>)}
      <Footer></Footer>
     </div>

      </div>
      </PostListProvider>
     
    
  );
}

export default App;

