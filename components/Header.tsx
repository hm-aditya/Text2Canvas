import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full h-[60px] bg-black border-b border-shadow border-opacity-50 bg-gradient-to-r from-black to-gray-800 p-4 flex items-center justify-between fixed top-0">
      <Link href="/">
        <h2 className="ml-8 font-bold text-xl tracking-tighter">Text2Canvas</h2>
      </Link>
    </div>
  );
}
