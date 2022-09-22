import Image from "next/image";
import image from "../../public/3.jpg";

import Link from "next/link";

const Video = () => {
  return (
    <Link href="/Quiz">
      <div className="max-w-sm p-2.5 rounded bg-slate-50 cursor-pointer pb-4 h-fit mx-auto shadow-md hover:scale-105 ease-out duration-300">
        <Image src={image} alt="" className="" />
        <p className="">
          # 23 React Hooks Bangla - React useReducer hook Bangla
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className=" font-medium">10 Questions</p>
          <p className="font-medium">Score : 10</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
