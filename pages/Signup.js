import Illustration from "../components/form component/Illustration";
import Form from "../components/form component/Form";
import Checkbox from "../components/form component/Checkbox";
import Button from "../components/form component/Button";
import TextInput from "../components/form component/TextInput";
import image from "../public/signup.svg";

import Nav from "../components/nav";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <Nav />

      <div className="mx-10">
        {" "}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Create an account</h1>
        </div>
        <div className="w-full h-[75vh] grid grid-cols-1 md:grid-cols-2">
          {/* section -1  */}
          <Illustration image={image} />

          {/* section -2  */}
          <div className="flex justify-center items-center">
            <Form className="w-full" action="#">
              <TextInput type="text" placeholder="Enter name" icon="person" />

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

              <TextInput
                type="password"
                placeholder="Confirm password"
                icon="lock_clock"
              />

              <Checkbox
                text="I agree to the Terms &amp; Conditions"
                style={"ml-4"}
              />

              <Button>Submit Now</Button>

              <div className="flex justify-center items-center">
                Already have an account?
                <Link href="/Login">
                  <a className="mx-1 text-blue-600">Login</a>
                </Link>
                instead.
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
