import React from "react";
import Nav from "@/components/Nav";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const data = useUser();
  const { isSignedIn, user } = data;
  console.log("user clerk auth data", data);
  console.log(user)

  return (
    <main className="h-screen flex w-full flex-col">
      <Nav />
      <SignedIn>
        <h1>Welcome dost</h1>
      </SignedIn>

      <SignedOut>
        please signin dost
      </SignedOut>
    </main>
  );
};

export default Dashboard;
