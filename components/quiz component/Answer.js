import Checkbox from "../form component/Checkbox";

const Answer = ({ options = [], handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto w-full mt-3 rounded">
      {options.map((option, index) => (
        <Checkbox
          className=""
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
          style={
            "my-auto w-full bg-gray-300 px-4 py-4 rounded cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white"
          }
        />
      ))}
    </div>
  );
};

export default Answer;
