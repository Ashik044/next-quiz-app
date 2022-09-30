import Videos from "../components/video component/Videos";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Home = () => {
  return (
    <div className="">
      <Videos />

      <div className="w-full text-center font-bold text-black dark:text-white mt-[3rem]">
        - Made By Ashik Reza -
      </div>

      <div className="w-full flex justify-center text-black dark:text-white mt-4 ">
        <a
          href="https://www.facebook.com/profile.php?id=100080883692935"
          className="px-2 transition-all hover:scale-75"
        >
          <BsFacebook className="w-[2.5rem] h-[2.5rem]"/>
        </a>
        <a href="https://www.instagram.com/reza2020828/?hl=en" className="px-2 transition-all hover:scale-75">
          <BsInstagram className="w-[2.5rem] h-[2.5rem]"/>
        </a>
      </div>
    </div>
  );
};

export default Home;
