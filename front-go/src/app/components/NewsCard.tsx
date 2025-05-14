import Image from "next/image";
import { Dot } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export const NewsCard = () => {
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
  return (
    <div className="flex flex-col w-[335px] h-[444px] font-finlandica gap-3 my-1">
      <Image width={340} height={240} alt="Post image" src={"/chatgpt.jpg"} />
      <div className="flex font-semibold text-[14px] text-[#6941C6]">
        <p>У.Хүрэлсүх</p>
        <Dot />
        <p>{formatted}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="text-[18px] font-finlandica font-bold">
          Our top 10 Javascript frameworks to use
        </div>
        <ArrowUpRight />
      </div>
      <div className="text-[#667085] font-finlandica">
        Starting a community doesn’t need to be complicated, but how do you get
        started?
      </div>
      <div className="flex gap-3">
        <p className="bg-[#ECFDF3] text-[#027A48] px-2.5 font-medium py-1 text-[14px] rounded-4xl">
          Software Development
        </p>
        <p className="bg-[#FFF6ED] text-[#C4320A] px-2.5 font-medium py-1 text-[14px] rounded-4xl">
          Frameworks
        </p>
      </div>
    </div>
  );
};
