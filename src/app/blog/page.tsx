"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { mockBlogPosts } from "~/data/blogData";

export default function BlogPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Blog</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Hier finden Sie Neuigkeiten, Artikel und Einblicke in die Welt der öffentlichen Ausschreibungen.
          </p>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {mockBlogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  src={post.imageUrl}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.date} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      {post.author}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}