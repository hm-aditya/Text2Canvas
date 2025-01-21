"use client";
import { Post } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/image");
        const data = await res.json();
        console.log(data);
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="w-full min-h-dvh gap-3 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  p-3 pt-[72px]">
      {loading ? (
        <div className="col-span-full flex justify-center items-center">
          <BiLoaderCircle className="animate-spin" size={50} />
          <br />
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {posts.map((post, index) => {
            return (
              <motion.div 
              initial={{scale:0.9,opacity:0,filter:"blur(10px)"}}
              transition={{duration:0.5,delay: index * 0.05}}
              animate={{scale:1,opacity:1,filter:"blur(0px)"}}
              className="w-full h-full rounded-md p-3" key={post.id}>
                <Image
                  src={post.url}
                  width={250}
                  height={250}
                  alt={post.prompt}
                  className="w-full object-contain rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
                ></Image>
                <p className="pt-4 text-xl text-center text-white/80">
                  {post.prompt}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      )}
    </div>
  );
}
