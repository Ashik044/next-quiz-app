import Checkbox from "../form component/Checkbox";

const Answer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto w-full h-[60px] mt-3 z-0">
      <Checkbox
        className="bg-red-600"
        text="Test answer"
        style={
          "my-auto w-full bg-gray-300 px-4 py-4 rounded cursor-pointer hover:bg-gray-200"
        }
      />
    </div>
  );
};

export default Answer;
