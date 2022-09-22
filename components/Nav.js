import React from "react";
import Image from "next/image";
import logo from "../public/logo-bg.png";

import Link from "next/link";

function nav() {
  return (
    <nav className="w-full flex justify-between items-cente pt-2 pb-2 px-10 mb-8 shadow-md">
      <div className="flex">
        <Link href="/">
          <a className="flex justify-between items-center ">
            <Image
              src={logo}
              alt="Learn with Sumit Logo"
              width={40}
              height={40}
            />
            <h3 className="ml-2 font-bold hidden sm:block">Learn with Sumit</h3>
          </a>
        </Link>
      </div>

      <div className="flex items-center">
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>

        <Link href="/Signup">
          <a className="pl-2 mb-1 text-blue-600 font-bold">Signup</a>
        </Link>

        {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
      </div>
    </nav>
  );
}

export default nav;
