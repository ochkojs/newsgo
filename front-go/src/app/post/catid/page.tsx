"use client";

import axios from "axios";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { AuthorAbout } from "@/app/components/AuthorAbout";
import { useRouter } from "next/navigation";

type categoryformat = {
  _id: string;
  categoryname: string;
  categoryImageUrl: string;
};

type postformat = {
  _id: string;
  title: string;
  postImageUrl: string;
  content: string;
  author: string;
  category: string;
};

const CategoryPage = ({ params }: { params: Promise<{ _id: string }> }) => {
  const { _id } = use(params);
  const [categoryPosts, setCategoryPosts] = useState<postformat[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3009/post/${_id}`);
      setCategoryPosts(data);
      console.log(data, "Category posts");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnClick = (id: string) => {
    router.push(`/post/${id}`);
  };

  const router = useRouter();

  return (
    <div className="flex flex-col mx-auto gap-2">
      <div className="font-medium text-2xl">Онцлох мэдээ</div>
      {categoryPosts.map((post) => (
        <div
          key={post._id}
          className="relative overflow-hidden rounded-xl w-[680px] h-[340px] hover:cursor-pointer"
          onClick={() => handleOnClick(post._id)}
        >
          <div className="">
            <p className="absolute top-4 left-4 px-2 bg-black/50 text-white rounded-xl z-10">
              {post.category}
            </p>
            <div className="absolute bottom-4 left-4 right-4 z-10">
              {/* You may want to add a formatted date here if available */}
              <p className="px-3 py-0.5 z-10 border-l-white text-amber-100">
                {/* {formatted} */}
              </p>
              <p className="px-3 py-0.5 bg-black/80 text-white text-[20px] rounded-xl z-10">
                {post.title}
              </p>
            </div>
          </div>
          <div className="w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
            <Image
              width={680}
              height={240}
              alt="post image"
              src={post.postImageUrl}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
