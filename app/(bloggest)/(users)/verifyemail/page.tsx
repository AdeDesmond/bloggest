"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || " ");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      const verifyUserEmail = async () => {
        try {
          await axios.post("/api/users/verifyemail", { token });
          setVerified(true);
        } catch (err: any) {
          setError(true);
          console.log(err.message);
        }
      };
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="w-full mt-28">
      <div className="flex flex-col items-center justify-center bg-sky-100 shadow-md w-1/2 mx-auto h-[20rem]">
        <h1 className="text-4xl font-semibold mb-8">Verify your email</h1>
        <h2>{token ? `${token}` : "no token"}</h2>
        {verified && (
          <div>
            <Button size="sm" asChild>
              <Link href="/sign-in" className="font-semibold">
                Login
              </Link>
            </Button>
          </div>
        )}

        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
