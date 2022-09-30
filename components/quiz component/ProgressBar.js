import classes from "../../styles/ProgressBar.module.css";
// import Button from "../form component/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Link from "next/link";

const ProgressBar = ({ next, prev, submit, progress }) => {
  return (
    <div className={`${classes.progressBar} dark:bg-slate-900 dark:text-white`}>
      <div
        className={`bg-green-400 hover:bg-slate-500 hover:text-white flex items-center justify-center ml-3 w-[50px] py-[15px] rounded cursor-pointer`}
        onClick={prev}
      >
        <FaArrowLeft />
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.rangeBody}>
          <div
            className={`${classes.progress} font-bold select-none `}
            style={{ width: `${progress}%` }}
          >
            <div className="hidden sm:block"> {progress}% Complete</div>
          </div>
        </div>
      </div>

      <button
        className="bg-green-400 hover:bg-slate-500 hover:text-white flex items-center px-4 py-2 m-3 rounded select-none"
        onClick={progress === 100 ? submit : next}
      >
        <span className=" flex w-[30px] py-[5px] sm:w-full sm:py-0">
          <div className="hidden sm:block">
            {progress === 100 ? "Submit" : "Next Question"}
          </div>
          <div className="ml-2 flex items-center">
            <FaArrowRight />
          </div>
        </span>
      </button>
    </div>
  );
};

export default ProgressBar;
