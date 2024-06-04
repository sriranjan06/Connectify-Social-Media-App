import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer"></div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        height={40}
        width={40}
        className="rounded-full cursor-pointer"
      ></Image>
      <p className="hidden sm:inline-flex font-medium">Sriranjan Srikanth</p>
    </div>
  );
};

export default Sidebar;
