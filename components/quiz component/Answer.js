import Checkbox from "../form component/Checkbox";

const Answer = () => {
  return (
    <div className="grid grid-cols-1 my-auto w-full h-[60px] mt-3 rounded">
      <Checkbox
        className=""
        text="Test answer"
        style={
          "my-auto w-full bg-gray-300 px-4 py-4 rounded cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white"
        }
      />
    </div>
  );
};

export default Answer;
