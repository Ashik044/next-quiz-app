import classes from "../../styles/ProgressBar.module.css";
// import Button from "../form component/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Link from "next/link";

const ProgressBar = () => {
  return (
    <div className={`${classes.progressBar} dark:bg-slate-900 dark:text-white`}>
      <div className={`bg-green-400 hover:bg-slate-500 hover:text-white flex items-center justify-center ml-3 w-[45px] py-[15px] rounded cursor-pointer`}>
        <FaArrowLeft/>
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>

      <Link href="/Result">
        <button className="bg-green-400 hover:bg-slate-500 hover:text-white flex items-center px-4 py-2 m-3 rounded">
          <span className="mr-2">Next Question</span>
          <FaArrowRight/>
        </button>
      </Link>
    </div>
  );
};

export default ProgressBar;
