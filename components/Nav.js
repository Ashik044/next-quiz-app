import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoImage from "../public/268-avatar-man-lineal.webp";
import logo from "../public/quiz.png";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { MdOutlineDarkMode } from "react-icons/md";

function nav() {
  const [isDark, setIsDark] = useState(true);

  const setColor = () => {
    const htmlClassName = localStorage.getItem("ColorTheme");
    const html = document.documentElement;
    if (htmlClassName) html.className = htmlClassName;
  };
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      localStorage.removeItem("ColorTheme");
      localStorage.setItem("ColorTheme", "dark");
      setColor();
    } else {
      localStorage.removeItem("ColorTheme");
      localStorage.setItem("ColorTheme", "ligth");
      setColor();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("ColorTheme") === "dark") {
      setIsDark(false);
      setColor();
    } else {
      setIsDark(true);
      setColor();
    }
  }, []);

  const { currentUser, logout } = useAuth();

  return (
    <nav className="w-full flex justify-between items-cente pt-2 pb-2 px-10 shadow-md dark:bg-slate-900 dark:text-white">
      <div className="flex">
        <Link href="/">
          <a className="flex justify-between items-center ">
            <Image
              src={logo}
              alt="Learn with Sumit Logo"
              width={40}
              height={40}
            />
            <h3 className="ml-2 font-bold hidden sm:block">Quiz Hub</h3>
          </a>
        </Link>
      </div>

      {currentUser ? (
        <div className="flex items-center">
          {/* <CgProfile className="w-6 h-6" /> */}
          <div className="w-12 dark:text-white">
            <Image src={logoImage} alt="" />
          </div>

          <span className="mx-3 font-bold text-blue-400">
            {currentUser.displayName}
          </span>

          <FiLogOut className="w-6 h-6 cursor-pointer" onClick={logout} />

          <BtnToggler onEvent={toggleTheme}>
            {isDark ? (
              <MdOutlineDarkMode className="w-6 h-6 cursor-pointer" />
            ) : (
              <ImSun className="w-6 h-6 cursor-pointer" />
            )}
          </BtnToggler>
        </div>
      ) : (
        <div className="flex items-center">
          {/* <CgProfile /> */}
          <div className="w-12 dark:text-white">
            <Image src={logoImage} alt="" />
          </div>

          <Link href="/Signup">
            <a className="px-3 mb-1 text-blue-700 font-bold dark:text-blue-400">
              Signup &nbsp;|
            </a>
          </Link>
          <Link href="/Login">
            <a className="pr-1 mb-1 text-blue-700 font-bold dark:text-blue-400">
              Login
            </a>
          </Link>
          <BtnToggler onEvent={toggleTheme}>
            {isDark ? (
              <MdOutlineDarkMode className="w-6 h-6 cursor-pointer" />
            ) : (
              <ImSun className="w-6 h-6 cursor-pointer" />
            )}
          </BtnToggler>
        </div>
      )}
    </nav>
  );
}

function BtnToggler({ children, onEvent }) {
  return (
    <div
      onClick={onEvent}
      className={`grid place-items-center w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base lg:text-lg rounded-full cursor-pointer text-gray-800 dark:text-gray-100 select-none ml-4 md:ml-8 `}
    >
      {children}
    </div>
  );
}

export default nav;
