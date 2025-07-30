import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "admin/components/dashboard.tsx",
    icon: Home,
  },
  {
    title: "Post",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Category",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <div className="">
      <Sidebar className="border rounded-3xl">
        <SidebarContent className="p-5">
          <SidebarGroup className="flex flex-col gap-4">
            <div className="font-bold text-5xl text-orange-400">NEWS GO</div>
            <Separator />
            <SidebarGroupLabel className="">
              <div className="flex gap-5 items-center font-bold text-[18px] text-black">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
                <p>Ye.Ochirdari</p>
              </div>
            </SidebarGroupLabel>
            <Separator />
            <SidebarGroupContent className="">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon size={25} />
                        <span className="text-lg">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
