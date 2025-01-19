"use client";
import React from "react";
import {motion} from "framer-motion"
import { usePathname } from "next/navigation";
export default function template({ children }: { children: React.ReactNode }) {
 const path=usePathname();
    return <motion.div key={path}
  initial={{scale:0.9,opacity:0}}
  animate={{scale:1,opacity:1}}
  transition={{duration:0.5}}
  >{children}</motion.div>;
}
