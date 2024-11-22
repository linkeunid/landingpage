"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  return (
    <section className="container grid grid-cols-2 items-center py-28">
      <div className="w-3/4 flex flex-col gap-12">
        <motion.h3
          className="font-bold text-5xl text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Connecting Through Innovative Digital Applications
        </motion.h3>
        <motion.p
          className="text-lg font-light text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          At Linkeun Mono, we unite connections through innovative digital
          applications, driven by a passion to create opportunities and empower
          individuals who strive to avoid unemployment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <ButtonLink
            variant={"outline"}
            size={"xl"}
            className="border border-foreground w-48"
          >
            <Link href={"#"}>Explore</Link>
          </ButtonLink>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Image
          src={"/smartphone.png"}
          alt="A smartphone is mounted on a stand, displaying a website with colorful graphics and the text 'Transforming Ideas into Reality'. Beside it, a laptop screen shows a blurred version of the same website. The background is soft and out of focus, with green foliage adding a hint of nature."
          width={606}
          height={544}
          className="rounded-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4 bg-background py-8 mx-10"
        >
          <strong className="text-5xl">"</strong>
          <div className="text-lg flex flex-col gap-4 tracking-widest">
            <strong className="w-80">
              Innovative and inspiring digital solutions.
            </strong>
            <p className="font-light">Linkeun Mono.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Explore };
