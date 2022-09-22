const TextInput = ({ icon, ...rest }) => {
  return (
    <div className="h-12 border-2 flex justify-between items-center px-4 m-4 rounded dark:bg-slate-900 dark:text-white">
      <input
        className="outline-none h-full w-full pr-2 dark:bg-slate-900 dark:text-white"
        {...rest}
      />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
