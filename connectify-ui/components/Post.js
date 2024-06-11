import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            className="rounded-full w-10 h-10"
          ></img>
          <div>
            <p className="font-medium">Sriranjan Srikanth</p>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <p className="py-4 ">Lorem Ipsum</p>
      </div>
      {/* If Any Image */}
      <div className="relative h-60 md:h-96 bg-white">
        <Image
          src="https://images.pexels.com/photos/20875403/pexels-photo-20875403/free-photo-of-a-mountain-with-trees-and-clouds-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      {/* Footer of a Post */}
      <div></div>
    </div>
  );
};

export default Post;
