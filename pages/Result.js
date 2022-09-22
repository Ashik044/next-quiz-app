import Summary from "../components/result component/Summary";
import Analysis from "../components/result component/Analysis";

import Nav from "../components/Nav";

const Result = () => {
  return (
    <>
      <Nav />

      <div className="mx-5 md:mx-10">
        <Summary />
        <Analysis />
      </div>
    </>
  );
};

export default Result;
