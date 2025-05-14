import { NewsCard } from "./components/NewsCard";

export default function Home() {
  return (
    <div className="flex w-screen justify-center">
      <div className="flex flex-wrap w-[1440px] justify-center px-5 py-10 gap-5">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}
