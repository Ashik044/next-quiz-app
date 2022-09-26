import React, { useState } from "react";
import Form from "../form component/Form";
import Checkbox from "../form component/Checkbox";
import Button from "../form component/Button";
import TextInput from "../form component/TextInput";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

export default function SignupForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("account created successfully");
      setLoading(true);
      await signup(email, password, username);
      router.push("/");
    } catch (err) {
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

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

      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        text="I agree to the Terms &amp; Conditions"
        required
        style={"ml-4"}
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
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
        Already have an account?
        <Link href="/Login">
          <a className="mx-1 text-blue-700 font-semibold dark:text-blue-400">Login</a>
        </Link>
        instead.
      </div>
    </Form>
  );
}
