import { NewsListComponent } from "@/app/components/NewsList";
import Image from "next/image";

export const RightSideComponent = () => {
  return (
    <div>
      <div className="w-full mt-5 relative h-130 ">
        <Image
          src="/tdbbanner.jpg"
          alt="Banner"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <NewsListComponent />
    </div>
  );
};
