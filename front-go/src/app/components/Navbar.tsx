import Image from "next/image";

export const Navbar = () => {

    const menulist = ["Home", "About", "Features", "Social", "Apps"];

    return (
        <nav className="flex w-[1440px] justify-between">
            <div className="flex gap-8 border border-amber-50 rounded-full">
                {menulist.map((menu, id) => (
                    <div key={id} className="flex gap-5 text-[16px] hover:bg-[#F85815] hover:cursor-pointer p-2 rounded-full">
                        {menu}
                    </div>
                ))}
            </div>
            <Image src="/NewsGo.png" width={100} height={40} alt="News Go Logo">
            </Image>
            <div>
                <button>сайн байна уу Улаанбаатарчуудаа Өнөөдөр үнэхээр сайхан өдөр байна</button> 
            </div>
        </nav>
    );
};