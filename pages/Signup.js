import Illustration from "../components/form component/Illustration";
import SignupForm from "../components/form component/SignupForm";
import image from "../public/signup.svg";

import Head from "next/head";
import Layout from "../components/Layout";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Signup Page</title>
      </Head>

      <Layout>
        <div className="mx-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Create an account</h1>
          </div>
          <div className="w-full h-[75vh] grid grid-cols-1 md:grid-cols-2">
            {/* section -1  */}
            <Illustration image={image} />

            {/* section -2  */}
            <div className="flex justify-center items-center">
              {/* frome component */}
              <SignupForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Signup;
