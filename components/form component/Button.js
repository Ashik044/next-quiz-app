const Button = ({ children }) => {
  return (
    <div className="flex justify-center items-center my-6">
      <button className="w-[95%] h-10 bg-green-400 flex justify-center items-center rounded cursor-pointer">
        <span className="font-bold">{children}</span>
      </button>
    </div>
  );
};

export default Button;
