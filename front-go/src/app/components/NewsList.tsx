import Image from "next/image";

export const NewsListComponent = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 py-10">
        <div className="text-2xl font-medium"></div>
        <div>
          <div>
            <div className="text-red-500">М.Батчимэг Ikon.mn</div>
            <div>3 цаг 52 минутын өмнө</div>
          </div>
          <div></div>
        </div>
        <div className="border border-orange-500 "></div>
        <div className="relative w-full h-130">
          <Image
            src="/chatgpt.jpg"
            alt="post image"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-justify">
          Монгол, Хятадын Гашуусухайт-Ганцмод төмөр замын боомтын хил холболтын
          бүтээн байгуулалтын нээлт энэ сарын 13-нд хоёр улсын хилийн зааг дээр
          боллоо. Энэ үеэр “Монголын төмөр зам” ТӨХК, “Чайна Энержи Коксжих
          нүүрс (Тяньжин)” ХХК хоорондын Нүүрс тээвэрлэлтийн урт хугацааны
          гэрээнд гарын үсэг зурав.
        </div>
      </div>
    </div>
  );
};
