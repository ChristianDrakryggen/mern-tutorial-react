import React from "react";

export const Post = (props) => {
  //constant set to the destructured props.post object to access the posts id, title and content
  const { id, title, content } = props.post;

  //constant set to the destructured props object to access the setposts-prop and
  //posts-prop associated with the setposts-state and the posts-state in the Posts-component
  const { setPosts, posts } = props;

  //Delete function that calls the setPosts-state-setter through its setPosts-prop and sets the posts-state,
  //to the array of the posts-state, returning the posts with id's not equal to the clicked posts id (which is accessed as a prop) through the array.filter method
  const deletePost = () => {
    //Fetch metodik för att sköta en delete request mot api och db
    /*fetch(`deleteendpoint/${id}`, {method: "delete"}).then(() => {
          fetch("listan").then(data => {
              setPosts(data)
          })
      })*/
    //För demo
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div style={{ borderBottom: "1px solid black", paddingBottom: "15px" }}>
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <p>{content}</p>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
};
