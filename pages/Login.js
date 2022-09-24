import Illustration from "../components/form component/Illustration";
import image from "../public/login.svg";
import Head from "next/head";
import Layout from "../components/Layout";
import LoginForm from "../components/form component/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>

      <Layout>
        <div className="mx-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Login to your account</h1>
          </div>

          <div className="w-full h-[75vh] grid grid-cols-1 md:grid-cols-2">
            {/* section -1  */}
            <Illustration image={image} />

            {/* section -2  */}
            <div className="flex justify-center items-center">
              <LoginForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
