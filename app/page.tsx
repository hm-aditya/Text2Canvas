"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWandMagicSparkles } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center ">
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
          className="mt-1 text-center text-xl text-white/70"
        >
          Generate Quality Images from text prompt for free
        </motion.p>
        <Link href="/create">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button className="px-4 py-2 mt-4 text-md text-white rounded-lg tracking-tighter bg-blue-600 hover:text-black hover:bg-cyan-400">
              Get Started <FaWandMagicSparkles className=" text-yellow-500" />
            </Button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
