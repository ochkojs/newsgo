import axios from "axios";
import { NewsCard } from "./components/NewsCard";
import { NewsFeedComponent } from "./components/NewsFeed";
import { FeaturedNewsComponent } from "./components/Featured";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto">
      <div className="">
        <div className="flex flex-wrap w-[1440px] px-5 py-10 gap-5">
          <FeaturedNewsComponent />
        </div>
        <NewsFeedComponent />
      </div>
    </div>
  );
}
