import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import React from "react";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  return <div>{auth ? <h1>Rajib</h1> : <Link href="/login">Login</Link>}</div>;
};

export default SignInOut;
