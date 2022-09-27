import { BsFacebook, BsInstagram } from "react-icons/bs";
import Illustration from "../components/form component/Illustration";
import SignupForm from "../components/form component/SignupForm";
import image from "../public/signup.svg";
import Head from "next/head";
import Layout from "../components/Layout";
import { withPublic } from "../components/route";

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

        <div className="w-full text-center font-bold text-black dark:text-white mt-[1rem]">
          - Made By Ashik Reza -
        </div>

        <div className="w-full flex justify-center text-black dark:text-white mt-4 ">
          <a
            href="https://www.facebook.com/profile.php?id=100080883692935"
            className="px-2"
          >
            <BsFacebook className="w-[2.5rem] h-[2.5rem]" />
          </a>
          <a
            href="https://www.instagram.com/reza2020828/?hl=en"
            className="px-2"
          >
            <BsInstagram className="w-[2.5rem] h-[2.5rem]" />
          </a>
        </div>
      </Layout>
    </>
  );
};

export default withPublic(Signup);
