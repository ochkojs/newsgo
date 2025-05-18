"use client";

import axios from "axios";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { AuthorAbout } from "@/app/components/AuthorAbout";

type postformat = {
  _id: string;
  title: string;
  postImageUrl: string;
  content: string;
  author: string;
  category: string;
};

const PostDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [singlePost, setSinglePost] = useState<postformat>();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3009/post/${id}`);
      setSinglePost(data);
      console.log(data, "Singlepost");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5 py-10">
      {!singlePost ? (
        <p>Уншиж байна...</p>
      ) : (
        <>
          <div className="text-2xl font-medium">{singlePost.title}</div>
          <div>
            <div className="text-red-500">{singlePost.author}</div>
            <div>3 цаг 52 минутын өмнө</div>
          </div>
          <div className="border border-orange-500"></div>
          <div className="relative w-full h-130">
            <Image
              src={singlePost.postImageUrl || "/chatgpt.jpg"}
              alt="post image"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-justify">{singlePost.content}</div>
          <AuthorAbout />
        </>
      )}
    </div>
  );
};

export default PostDetails;
