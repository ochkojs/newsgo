"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { EllipsisVertical, Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type postformat = {
  _id: string;
  title: string;
  postImageUrl: string;
  content: string;
  author: string;
  category: string;
  createAtPost: string;
};

export default function Page() {
  const [posts, setPosts] = useState<postformat[]>([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3009/post/posts");
    setPosts(result.data.posts);
    console.log(result.data.posts, "Fetched Posts");
  };

  useEffect(() => {
    fetchData();
  }, []);
  const postDate = new Date();
  const day = postDate.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[postDate.getMonth()];
  const year = postDate.getFullYear();
  const formatted = `${day} ${month} ${year}`;

  const handleOnClick = (id: string) => {
    router.push(`/post/${id}`);
  };

  const router = useRouter();

  return (
    <div className="flex flex-col mx-auto gap-2">
      <div className="flex w-[680px] h-[52px] border items-center px-4 justify-between">
        <Menu />
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full"
            width={30}
            height={30}
            alt="User"
            src="/spaceman2.jpg"
          />
          <div className="font-medium text-lg">Zoe Photo Studio</div>
        </div>
        <EllipsisVertical />
      </div>
      <div className="font-medium text-2xl">Онцлох мэдээ</div>
      {posts.map((post) =>
        post ? (
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
                <p className="px-3 py-0.5 z-10 border-l-white text-amber-100">
                  {formatted}
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
        ) : null
      )}
    </div>
  );
}
