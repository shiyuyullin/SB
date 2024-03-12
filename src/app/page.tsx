"use client";

import GithubHeadLine from "@/components/GithubHeadline";
import { HeadLine } from "@/components/HeadLine";
import SocialpostHeadline from "@/components/SocialpostHeadLine";
import { signIn, useSession } from "next-auth/react";

export default function IndexPage() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <HeadLine />
        <div className="py-4">
          <GithubHeadLine />
        </div>
        <div>
          <SocialpostHeadline />
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <h1>Unauthenticated</h1>
        <button onClick={() => signIn("github")}>Sign in</button>
      </div>
    );
  }
}
