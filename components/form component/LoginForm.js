import { useState } from "react";
import Link from "next/link";
import Button from "../form component/Button";
import Form from "../form component/Form";
import TextInput from "../form component/TextInput";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("Login successfully");
      setLoading(true);
      await login(email, password);
      router.push("/");
    } catch (err) {
      setLoading(false);
      setError("Failed to login");
    }
  }

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      <div className="flex justify-center">
        {error && (
          <p className="w-[95%] text-center py-2 mb-2 bg-red-400 text-white rounded">
            {error}
          </p>
        )}
      </div>

      <div className="flex justify-center items-center">
        Don't have an account?
        <Link href="/Signup">
          <a className="mx-1 text-blue-700 font-semibold dark:text-blue-400">Signup</a>
        </Link>
        instead.
      </div>
    </Form>
  );
}

export default LoginForm;
