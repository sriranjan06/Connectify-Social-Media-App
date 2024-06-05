import Image from "next/image";
import React from "react";
import { ImUsers } from "react-icons/im";
import SidebarItems from "./SidebarItems";
import { AiFillShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdExpandMore, MdGroup } from "react-icons/md";
import { BsStopwatchFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        ></Image>
        <p className="hidden sm:inline-flex font-medium">Sriranjan Srikanth</p>
      </div>
      <SidebarItems Icon={ImUsers} value="Friends"></SidebarItems>
      <SidebarItems Icon={MdGroup} value="Groups"></SidebarItems>
      <SidebarItems Icon={AiFillShop} value="Marketplace"></SidebarItems>
      <SidebarItems Icon={MdOutlineOndemandVideo} value="Watch"></SidebarItems>
      <SidebarItems Icon={BsStopwatchFill} value="Memories"></SidebarItems>
      <SidebarItems Icon={MdExpandMore} value="See More"></SidebarItems>
    </div>
  );
};

export default Sidebar;
