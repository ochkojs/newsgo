

import Image from 'next/image';

export const FeaturedPosts = () => {
    return (
        <div className="flex flex-col gap-5">
        <div className="flex gap-5">
            <div className="relative w-[700px] h-[500px] bg-[#F85815] rounded-lg">
                <Image src={"/gogo.jpg"} width={700} height={500} alt="News Go Logo" objectFit='cover' className="rounded-lg"></Image>
                <p className='absolute px-2 bottom-20 bg-red-500 rounded-3xl text-[14px]'>Нийгэм</p>
                <p className='absolute p-5 text-2xl'>81 жилийн хугацаанд цэргийн 230 зүтгэлтэн ГЕНЕРАЛ цол хүртжээ</p>
            </div>
            <div className="flex flex-col gap-5">
            <div className="w-[400px] h-[240px] bg-[#F85815] rounded-lg"></div>
            <div className="w-[400px] h-[240px] bg-[#F85815] rounded-lg"></div>
            </div >
            <div className="w-[400px] h-[500px] bg-[#F85815] rounded-lg">

            </div>
        </div>
        </div>
    );
}