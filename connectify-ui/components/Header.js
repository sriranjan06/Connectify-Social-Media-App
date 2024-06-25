import React from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { HiHome } from "react-icons/hi2";
import { RiFlag2Fill } from "react-icons/ri";
import { MdOutlineOndemandVideo, MdExpandMore } from "react-icons/md";
import { AiFillShop, AiFillMessage, AiFillBell } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* left */}
      <div className="flex min-w-fit">
        <Image
          src="https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png"
          height={40}
          width={40}
        ></Image>
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <IoSearchOutline size={20}></IoSearchOutline>
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Search Connectify"
          ></input>
        </div>
      </div>
      {/* center */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiHome className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <RiFlag2Fill className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdOutlineOndemandVideo className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <AiFillShop className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameController className="mx-auto" size={25} />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          onClick={signOut}
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        ></Image>
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {session?.user.name.split(" ")[0]}
        </p>
        <CgMenuGridO
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdExpandMore
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
