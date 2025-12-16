import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { User } from "lucide-react";

function App() {
  return (
    <main className="flex h-screen w-full flex flex-col">
      <nav className="flex px-4 py-6 items-start bg-gray-300">
        <SignedIn>
          <UserButton/>
        </SignedIn>

          <SignedOut>
            <SignInButton/>
          </SignedOut>
      </nav>
      welcome to my demo app dost
    </main>
  );
}

export default App;
