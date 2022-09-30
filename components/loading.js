import classes from "../styles/load.module.css";

const loading = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className={classes.loader}>
        <div className={classes.cube}></div>
        <div className={classes.cube}></div>
        <div className={classes.cube}></div>
      </div>
    </div>
  );
};

export default loading;
