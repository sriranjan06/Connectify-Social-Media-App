import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div
      // className="flex flex-col items-center mx-auto my-auto"
      className="flex h-screen"
    >
      <div className="m-auto">
        <Image
          className="align-middle cursor-pointer"
          onClick={signIn}
          src="https://developers.google.com/static/identity/images/branding_guideline_sample_nt_sq_lg.svg"
          height={240}
          width={240}
        />
      </div>
    </div>
  );
};

export default Login;
