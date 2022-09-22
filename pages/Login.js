import Button from "../components/form component/Button";
import Form from "../components/form component/Form";
import TextInput from "../components/form component/TextInput";
import Illustration from "../components/form component/Illustration";

import image from "../public/login.svg";
import Nav from "../components/Nav";

import Link from "next/link";

const Login = () => {
  return (
    <>
      <Nav />

      <div className="mx-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Login to your account</h1>
        </div>

        <div className="w-full h-[75vh] grid grid-cols-1 md:grid-cols-2">
          {/* section -1  */}
          <Illustration image={image} />

          {/* section -2  */}
          <div className="flex justify-center items-center">
            <Form className="w-full" action="#">
              <TextInput
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
              />

              <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
              />

              <Button>
                <span>Submit Now</span>
              </Button>

              <div className="flex justify-center items-center">
                Don't have an account?
                <a className="mx-1 text-blue-600">
                  <Link href="/Signup">Signup</Link>
                </a>
                instead.
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
