import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../components/firebase-config";

function Blogs({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };



  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse()); // Reverse the order of posts
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className="blogsPage">
      {postLists.map((post, index) => {
        
        

        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <b>{post.title}</b>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                    
                  >
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <p className="postAuthor">@{post.author.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
