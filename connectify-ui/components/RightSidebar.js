import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=600"
        name="Karthik Senthil"
        status="Online"
      />
      <Contacts
        src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=600"
        name="Sagar Mohan"
        status="Online"
      />
      <Contacts
        src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600"
        name="Kaushal Bhat"
        status="Offline"
      />
      <Contacts
        src="https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=600"
        name="Sriranjini Ramesh Vasista"
        status="Online"
      />
      <Contacts
        src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600"
        name="Sujith Tellakula"
        status="Offline"
      />
    </div>
  );
};

export default RightSidebar;
