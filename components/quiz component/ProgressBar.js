import classes from "../../styles/ProgressBar.module.css"
// import Button from "../form component/Button";

import Link from "next/link"

const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      
      <Link href="/Result">
        <button className="bg-green-400 hover:bg-black hover:text-white flex items-center px-4 py-2 m-3 rounded">
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button>
      </Link>
    </div>
  );
};

export default ProgressBar;
