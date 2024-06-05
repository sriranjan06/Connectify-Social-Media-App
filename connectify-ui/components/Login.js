import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        height={240}
        width={240}
      />
      <a
        onClick={signIn}
        className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-green-500 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
