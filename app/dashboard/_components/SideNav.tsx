"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const path = usePathname();
  useEffect(() => {
    console.log("Path: ", path);
  }, []);

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  return (
    <div className="relative h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="Logo" width={80} height={80} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={`${menu.path}`}>
            <div
              key={index}
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center 
                ${path == menu.path && "bg-primary text-white"}
                `}
            >
              <menu.icon className="h-6 w-6" />
              <h2 key={index} className="text-lg">
                {menu.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
