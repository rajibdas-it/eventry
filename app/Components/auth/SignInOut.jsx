import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import React from "react";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const logout = () => {
    setAuth(null);
  };
  return (
    <div>
      {auth ? (
        <>
          <span>Hello,{auth.name}</span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer" onClick={logout}>
            Logout
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default SignInOut;
