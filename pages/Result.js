import Summary from "../components/result component/Summary";
import Analysis from "../components/result component/Analysis";
import Head from "next/head";
import Layout from "../components/Layout";
import { withProtected } from "../components/route";

const Result = () => {
  return (
    <>
      <Head>
        <title>Result Page</title>
      </Head>

      <Layout>
        <div className="mx-5 md:mx-10 dark:bg-slate-700 dark:text-black">
          <Summary />
          <Analysis />
        </div>
      </Layout>
    </>
  );
};

export default withProtected(Result);
