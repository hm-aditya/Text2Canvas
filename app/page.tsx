"use client";

import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center " >
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, opacity: 0.5 }}
          className="text-3xl sm:text-6xl font-bold tracking-tight  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent  items-center"
        >
          Text2Canvas
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="mt-1 text-center text-xl text-white/70">Generate Quality Images from text prompt for free</motion.p>
      </div>
    </div>
  );
}
