import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";


const Nav = () => {
  return (
    <nav className="h-[50px] w-full flex px-4 py-6 items-center justify-end bg-gray-300">
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
};

export default Nav;
