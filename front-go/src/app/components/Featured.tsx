"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type postformat = {
  _id: string;
  title: string;
  postImageUrl: string;
  content: string;
  author: string;
  category: string;
  createAtPost: string;
};

export const FeaturedNewsComponent = () => {
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
    <div className="py-10">
      <Carousel className="w-150 h-75">
        <CarouselContent>
          {posts.map((post, index) =>
            post ? (
              <CarouselItem className="p-0" key={index}>
                <div className="p-0">
                  <Card className="shadow-none rounded-none py-0 px-0">
                    <CardContent className="flex w-150 h-75 items-center justify-center">
                      <div
                        key={post._id}
                        className="relative overflow-hidden w-150 h-75 hover:cursor-pointer"
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
                            width={750}
                            height={300}
                            alt="post image"
                            src={post.postImageUrl}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ) : null
          )}
        </CarouselContent>
        <CarouselPrevious className="ml-20 hover:cursor-pointer" />
        <CarouselNext className="mr-20 hover:cursor-pointer" />
      </Carousel>
    </div>
  );
};
