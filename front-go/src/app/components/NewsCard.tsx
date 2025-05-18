import Image from "next/image";
import { Dot } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

type postformat = {
  _id: string;
  title: string;
  postImageUrl: string;
  content: string;
  author: string;
  category: string;
};

type posttype = {
  post: postformat;
};

export const NewsCard = ({ post }: posttype) => {
  if (!post) {
    console.warn("post is undefined in NewsCard");
    return null;
  }

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

  const handleOnClick = (id: string) => {
    router.push(`/post/${id}`);
  };

  const router = useRouter();

  const formatted = `${day} ${month} ${year}`;
  return (
    <div
      key={post._id}
      className="flex flex-col w-[335px] h-[444px] font-finlandica gap-3 my-1 hover:cursor-pointer"
      onClick={() => handleOnClick(post._id)}
    >
      <div className="relative w-full h-50">
        <Image
          fill
          className="object-cover"
          alt="Post image"
          src={post.postImageUrl}
        />
      </div>

      <div className="flex font-semibold text-[14px] text-[#6941C6]">
        <p>{post.author}</p>
        <Dot />
        <p>{formatted}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="text-[18px] font-finlandica font-bold">
          {post.title}
        </div>
        <ArrowUpRight />
      </div>
      <div className="text-[#667085] font-finlandica">
        {post.content.slice(0, 100)}
      </div>
      <div className="flex gap-3">
        <p className="bg-[#ECFDF3] text-[#027A48] px-2.5 font-medium py-1 text-[14px] rounded-4xl">
          {post.category}
        </p>
      </div>
    </div>
  );
};
