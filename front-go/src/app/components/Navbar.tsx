import { Switch } from "@/components/ui/switch";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const NavbarMyMenu = () => {
  const menuList = [
    "Эхлэл",
    "Улс төр",
    "Эдийн засаг",
    "Нийгэм",
    "Эрүүл мэнд",
    "Дэлхий",
    "Спорт",
    "Технологи",
    "Шилдэг",
    "Бусад",
  ];

  return (
    <div className="flex border-b-2 border-amber-600 py-5">
      <div className="flex flex-row w-[1440px] items-center justify-between">
        <a href="/">
          <p className="text-3xl text-orange-500 font-bold">NEWS GO</p>
        </a>

        <div className="flex gap-5">
          <Menubar>
            {menuList.map((menu, index) => (
              <MenubarMenu key={index}>
                <MenubarTrigger className="font-bold uppercase hover:cursor-pointer hover:text-orange-500">
                  {menu}
                </MenubarTrigger>
              </MenubarMenu>
            ))}
            <MenubarMenu>
              <MenubarTrigger>Blog</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="flex items-center gap-3">
            <Switch className="hover:cursor-pointer" />
            <p className="font-bold">Light</p>
          </div>
        </div>
      </div>
    </div>
  );
};
