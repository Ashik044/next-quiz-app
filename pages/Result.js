import Summary from "../components/result component/Summary";
import Analysis from "../components/result component/Analysis";

import Nav from "../components/Nav";

import Layout from "../components/Layout";

const Result = () => {
  return (
    <>
      <Layout>
        {/* <Nav /> */}

        <div className="mx-5 md:mx-10 dark:bg-slate-700 dark:text-black">
          <Summary />
          <Analysis />
        </div>
      </Layout>
    </>
  );
};

export default Result;
