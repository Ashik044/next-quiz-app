import Image from "next/image";
import Link from "next/link";

const Video = ({ title, id, noq, keyNumber }) => {
  return (
    <Link href={{ pathname: "/Quiz", query: { id } }} key={keyNumber}>
      <div className="max-w-sm p-2.5 rounded bg-white cursor-pointer pb-4 h-fit mx-auto shadow-md hover:scale-105 ease-out duration-300 dark:bg-slate-900 dark:text-white">
        <Image
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          width="400"
          height="230"
        />
        <p className="">{title}</p>
        <div className="flex justify-between items-center mt-4">
          <p className=" font-medium">{noq} Questions</p>
          <p className="font-medium">Total number: {noq * 5}</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
