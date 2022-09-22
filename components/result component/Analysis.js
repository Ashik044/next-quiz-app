import Question from "./Question";

const Analysis = () => {
  return (
    <div className="my-10 ">
      <div className="text-center my-6 ">
        <h1 className="text-lg md:text-2xl font-bold dark:text-white">
          Question Analysis
        </h1>
        <h4 className="text-lg md:text-xl font-semibold text-gray-400 dark:text-white">
          You answerd 5 out of 10 questions correctly
        </h4>
      </div>

      <Question />
    </div>
  );
};

export default Analysis;
