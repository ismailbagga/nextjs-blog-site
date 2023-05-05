import Image from "next/image";
import React, { FC } from "react";

export type PartialTag = {
  id: number;
  title: string;
  slug: string;
};

export type Blog = {
  id: number;
  slug: number;
  title: string;
  description: string;
  createdAt: Date;
  url: string;
  readingTime: number;
  tags: PartialTag;
};
const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div>
      <Image src={blog.url} height={50} className="w-full" alt={blog.title} />
      <div className="content">
        <h5>{blog.createdAt.toISOString()}</h5>
        <h1 className="">{blog.title}</h1>
      </div>
    </div>
  );
};

export default BlogCard;
