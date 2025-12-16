import React from "react";
import { useNavigate } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="h-[50px] w-full flex px-4 py-6 items-center justify-end bg-gray-300">
      <SignedIn>
        <h1 onClick={() => navigate("/dashboard")} className="mx-4 cursor-pointer">
          Dashboard
        </h1>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
};

export default Nav;
