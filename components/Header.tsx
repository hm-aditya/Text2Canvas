"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { TbLoader } from "react-icons/tb";
export default function Header() {
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading") setInitialLoading(false);
  }, [status, session]);
  return (
    <div className="w-full h-[60px] lg:max-w-7xl  fixed border-b  z-50 backdrop-blur-sm p-4 flex items-center justify-between  top-0">
      <Link href="/">
        <h2 className="font-bold text-xl tracking-tighter bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ">
          Text2Canvas
        </h2>
      </Link>
      {initialLoading && status === "loading" ? (
        <TbLoader className=" animate-spin" />
      ) : !session ? (
        <div className="__menu mr-2">
          <Button onClick={() => signIn("google")}>Log in</Button>
        </div>
      ) : (
        <div className="flex gap-3 justify-center items-center">
          <Button
            onClick={() => signOut()}
            className="mr-2 bg-red-500 text-white tracking-tight"
          >
            Log out
          </Button>
          <Link href="/profile">
            <Avatar>
              <AvatarImage src={session.user?.image || ""} />
              <AvatarFallback>
                {session.user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      )}
    </div>
  );
}
