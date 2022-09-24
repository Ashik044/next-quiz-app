import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo-bg.png";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

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
            <h3 className="ml-2 font-bold hidden sm:block">Learn with Sumit</h3>
          </a>
        </Link>
      </div>

      {currentUser ? (
        <div className="flex items-center">
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span className="mx-3 font-bold text-blue-400">
            {currentUser.displayName}
          </span>
          <span
            className="material-icons-outlined cursor-pointer"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
          <BtnToggler onEvent={toggleTheme}>
            {isDark ? (
              <span class="material-icons-outlined">dark_mode</span>
            ) : (
              <span class="material-icons-outlined">light_mode</span>
            )}
          </BtnToggler>
        </div>
      ) : (
        <div className="flex items-center">
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>

          <Link href="/Signup">
            <a className="px-3 mb-1 text-blue-600 font-bold dark:text-blue-400">
              Signup &nbsp;|
            </a>
          </Link>
          <Link href="/Login">
            <a className="pr-1 mb-1 text-blue-600 font-bold dark:text-blue-400">
              Login
            </a>
          </Link>
          <BtnToggler onEvent={toggleTheme}>
            {isDark ? (
              <span class="material-icons-outlined">dark_mode</span>
            ) : (
              <span class="material-icons-outlined">light_mode</span>
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
