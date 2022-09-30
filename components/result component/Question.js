import { FiHelpCircle } from "react-icons/fi";
import Answers from "../quiz component/Answer";

const Question = () => {
  return (
    <div className="bg-gray-100 p-3 rounded h-auto shadow dark:bg-slate-900 dark:text-white">
      <div className="text-lg md:text-2xl font-bold flex items-center ">
        <div className="flex items-center pr-2">
          <FiHelpCircle />
        </div>

        <p className=""> Here goes the question from Learn with Sumit?</p>
      </div>

      <Answers />
    </div>
  );
};

export default Question;
