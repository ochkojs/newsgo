import { FeaturedPosts } from "./components/FeaturedPosts";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex justify-center p-8 pb-20 gap-16 sm:p-20 sm:flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <FeaturedPosts />
    </div>
  );
}
