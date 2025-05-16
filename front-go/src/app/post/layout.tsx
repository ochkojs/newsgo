import { RightSideComponent } from "./_component/RightSilde";
import { Finlandica } from "next/font/google";

const finlandica = Finlandica({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Post({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col w-[1440px] mx-auto ${finlandica.className}`}>
      <div className="flex justify-center gap-4">
        <div className="w-[70%]">{children}</div>
        <div className="w-[30%]">
          <RightSideComponent />
        </div>
      </div>
    </div>
  );
}
