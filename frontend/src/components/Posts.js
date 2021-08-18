import React, { useState, useEffect } from "react";
import { getPosts } from "../staticData/Posts";
import { Post } from "./Post";

export const Posts = () => {
  //id variable to initiate each new post with a random id
  let id = Math.floor(Math.random() * 100) + 1;

  //State to keep and change the array of posts - initialized as an empty array
  const [posts, setPosts] = useState([]);

  //State to create new posts - initialized as an object structured as an empty post
  const [newPost, setNewPost] = useState({
    id: null,
    title: "",
    content: "",
  });

  //Hook that executes the setPosts state setter when this component mounts - only on mount because of empty dependency array
  useEffect(() => {
    setPosts(getPosts());
  }, []);

  //Function that runs every time the value of any input field associated with the function changes,
  //executes the setNewPost state setter and sets the state to whatever is in the active input fields name and value props to the key and value of the newPost state object
  const changeInput = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  //Function that is executed on form submission, sets the id of the new post object to the randomized id-variable, sets the posts state to whatever it was before and adds the newPost state object
  const submitForm = (e) => {
    e.preventDefault();
    setNewPost({ ...newPost, id });
    //Skapa fetch request mot api som postar newPost state in i postslistan
    //
    //Riktig fetchkod här
    //fetch("sdfsdfsdf", {method: "post", body: JSON.stringify(newPost)}).then(() => {fetch request för listan ===> setPosts(till den uppdaterade listan)})
    //
    //För demo-syfte
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input name="title" placeholder="Title" onChange={changeInput} />
        <input name="content" placeholder="Content" onChange={changeInput} />
        <button type="submit">Submit</button>
      </form>
      {posts.map((post) => (
        <Post key={post.id} post={post} setPosts={setPosts} posts={posts} />
      ))}
    </>
  );
};

//export default Posts;
