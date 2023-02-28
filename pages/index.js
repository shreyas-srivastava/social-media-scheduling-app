import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import router from "../routes/posts";
// import Post from "./api/post";
// import Server from "./server";
import {Route} from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Social Media Scheduling App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Social Media Scheduling App
        </h1>
        <PostForm setPosts={setPosts} />
        <PostList posts={posts} setPosts={setPosts} />
      </main>
    </div>
  );
}
