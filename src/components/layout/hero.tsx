"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[805px] w-full bg-black bg-blend-darken relative">
      <Image
        src={"/banner.jpg"}
        alt="jumbotron"
        width={1344}
        height={768}
        className="w-full h-[805px] object-cover opacity-60 absolute"
      />
      <div className="absolute w-full h-full flex flex-col gap-5 items-center justify-center text-white text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} // Starting state
          animate={{ opacity: 1, y: 0 }} // Ending state
          transition={{ duration: 0.5 }} // Animation duration
          className="font-bold text-xl md:text-4xl lg:text-6xl w-2/6 leading-normal md:leading-tight lg:leading-snug"
        >
          Connecting Digital Solutions for a Brighter Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Starting state
          animate={{ opacity: 1, y: 0 }} // Ending state
          transition={{ duration: 0.5 }} // Animation duration
          className="w-3/12"
        >
          Empowering individuals through innovative applications and relentless
          progress in the digital landscape.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Starting state
          animate={{ opacity: 1, y: 0 }} // Ending state
          transition={{ duration: 0.5 }} // Animation duration
          className="flex gap-2"
        >
          <ButtonLink variant={"outline"} size={"xl"}>
            <Link href={"#1"}>Discover</Link>
          </ButtonLink>
          <ButtonLink variant={"none"} size={"xl"}>
            <Link href={"#2"}>Explore</Link>
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
