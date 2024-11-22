"use client";

import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  XIcon,
} from "@/components/icons/facebook";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0F0A14] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="container grid grid-cols-2 justify-between gap-4 w-full h-80 py-28"
      >
        <div className="flex flex-col justify-center gap-4">
          <div>
            <h5 className="font-bold text-2xl mb-4">Innovate</h5>
            <p className="text-sm w-72">
              Empowering connections through digital applications and
              creativity.
            </p>
          </div>
          <ul className="flex gap-4">
            <li>
              <Link href={"#"}>
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <TiktokIcon />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <XIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex float-right gap-4">
          <div>
            <strong className="font-bold inline-block mb-4">Unity</strong>
            <p className="">+62xxxxxxxxxxx</p>
            <Link href={"mailto:contact@linkeun.com"}>contact@linkeun.com</Link>
          </div>
          <div className="w-full">
            <strong className="font-bold inline-block mb-4">Progress</strong>
            <div className="grid gap-2 w-full">
              <Label htmlFor="email">Enter your email address</Label>
              <Input
                type="email"
                id="email"
                placeholder="You email for update"
                autoComplete="off"
              />
              <Button type="submit" variant={"secondary"}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export { Footer };
