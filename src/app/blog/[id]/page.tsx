"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { mockBlogPosts, type BlogPost } from "~/data/blogData";
import Image from "next/image";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (id) {
      const foundPost = mockBlogPosts.find((p) => p.id === id);
      if (foundPost) {
        setPost(foundPost);
      } else {
        router.push("/blog"); // Redirect if post not found
      }
    }
  }, [id, router]);

  if (!post) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center pt-32 pb-16">
        <p>Lade Blogbeitrag...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-400 text-sm mb-8">
            <time dateTime={post.date} className="mr-4">
              {post.date}
            </time>
            <span>Von {post.author}</span>
          </div>

          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div
            className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </div>
  );
}
