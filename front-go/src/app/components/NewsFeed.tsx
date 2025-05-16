"use client";
import axios from "axios";
import { NewsCard } from "./NewsCard";
import { useState, useEffect } from "react";

type postformat = {
  _id: string;
  title: string;
  postImageUrl: string;
  content: string;
  author: string;
  category: string;
};

export const NewsFeedComponent = () => {
  const [posts, setPosts] = useState<postformat[]>([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3009/post/posts");
    setPosts(result.data.posts);
    console.log(posts, "Fetched Posts");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-8">
        {posts.map((post) =>
          post ? <NewsCard key={post._id} post={post} /> : null
        )}
      </div>
    </div>
  );
};
