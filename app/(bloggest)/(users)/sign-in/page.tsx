"use client";

import { signInUser } from "@/actions/user-actions/signin-user";
import { Popover } from "@/components/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { useSignInUser } from "../_actions/use-signin-user";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [isLogginIn, setIsLogginIn] = useState(false);
  const router = useRouter();
  const { signInUserFunc } = useSignInUser();
  const onSignInNewUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLogginIn(true);
    const userData = new FormData();
    userData.append("email", email);
    userData.append("password", password);
    signInUserFunc(userData);
    setEmail("");
    setPassWord("");
    router.push("/");
    setIsLogginIn(false);
  };
  return (
    <Popover>
      <form
        className="w-[100%] px-14 py-2 space-y-1"
        onSubmit={onSignInNewUser}
      >
        <h2 className="text-xl font-bold text-center mb-3">Sign In</h2>
        <p className="text-sm text-neutral-400 text-center">
          Do not have an account ?{" "}
          <span className="text-sky-200 font-semibold">
            <Link href="/sign-up">Sign-up</Link>
          </span>
        </p>
        <label htmlFor="email">Email</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <Input
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <Button
          disabled={isLogginIn}
          className="w-full disabled:bg-opacity-60 disabled:cursor-not-allowed"
        >
          Sign-in
        </Button>
      </form>
    </Popover>
  );
}
