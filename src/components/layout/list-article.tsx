"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    link: "#",
    imgUrl: "https://images.unsplash.com/photo-1681298843538-0a4b6dc3f480",
    title:
      "Linkeun Mono: Connecting Digital Applications for a Brighter Future",
    description:
      "At Linkeun Mono, we are dedicated to creating innovative digital applications. Our name symbolizes unity and progress, reflecting our commitment to moving forward. Join us as we share insights and showcase our projects, driven by a passion to empower those who refuse to be unemployed.",
    datetime: "5/8/2024",
    readingTime: "5 min read",
  },
  {
    link: "#",
    imgUrl: "https://images.unsplash.com/photo-1692976000973-704738d63369",
    title:
      "Linkeun Mono: Connecting Digital Applications for a Brighter Future",
    description:
      "At Linkeun Mono, we unite connections through innovative digital applications. As a sole proprietorship, we strive to empower individuals and foster growth, ensuring that no one is left behind in the digital age. Join us on our journey to create impactful solutions for a better tomorrow.",
    datetime: "5/8/2024",
    readingTime: "5 min read",
  },
];

const ListArticle = () => {
  return (
    <section className="container grid grid-cols-2 gap-8 items-center py-28">
      {articles?.map((article, i) => (
        <div key={i} className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={article.imgUrl}
              alt={article.title}
              width={1800}
              height={1080}
              className="h-96 w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={article.link}
              className="font-bold text-2xl text-gray-800"
            >
              {article.title}
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-base text-gray-500"
          >
            {article.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex gap-2"
          >
            <p className="text-sm text-gray-500">{article.datetime}</p>
            <p className="text-sm text-gray-500">&#8226;</p>
            <p className="text-sm text-gray-500">{article.readingTime}</p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export { ListArticle };
