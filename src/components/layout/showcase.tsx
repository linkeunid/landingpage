"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Showcase = () => {
  return (
    <section className="container text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-5xl"
      >
        Our Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-96 mx-auto text-gray-500 my-8"
      >
        Showcasing innovative digital applications we have developed together.
      </motion.p>

      <div className="grid justify-center gap-4 my-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4"
        >
          <Image
            src={"https://images.unsplash.com/photo-1524221629551-6dd14def5ffd"}
            alt="laptop"
            width={503}
            height={360}
            className="rounded-2xl"
            loading="lazy"
          />
          <Image
            src={"https://images.unsplash.com/photo-1562600484-c6ef0ffe27a2"}
            alt="people working"
            width={503}
            height={360}
            className="rounded-2xl"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between text-left"
        >
          <span>
            <strong className="text-2xl font-bold">Linkeun Topup</strong>
            <p>A digital application that provides top-up services.</p>
          </span>
          <ButtonLink
            variant={"outline"}
            size={"xl"}
            className="border border-foreground w-48"
          >
            <Link href={"https://topup.linkeun.com"} target="_blank">
              Explore
            </Link>
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
};

export { Showcase };
