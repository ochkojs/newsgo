import Image from "next/image";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";

export const AuthorAbout = () => {
  return (
    <div className="flex gap-5 p-3 border border-gray-300 rounded-2xl">
      <Image
        width={200}
        height={200}
        objectFit="cover"
        alt="Author Profile"
        src="/author.jpg"
        className="rounded-2xl"
      />
      <div className="flex flex-col justify-between">
        <div className="flex gap-5">
          <div>
            <div className="flex gap-3">
              <p>ДатаАналист</p>
              <p>-</p>
              <p>Нийтлэл: 5</p>
            </div>
            <p className="text-3xl font-semibold">Нэргүй Сүхцоож</p>
            <p>Түүх нийгмийн ухаан, судалгаа, баримтууд</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Facebook size={20} color="blue" />
          <Twitter size={20} color="black" />
          <Youtube size={20} color="red" />
        </div>
      </div>
    </div>
  );
};
