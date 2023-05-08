import Image from "next/image";
import React, { FC } from "react";
import TagPill from "../tags/TagPill";
import { CardBlog } from "@/pages/blogs";
import moment from "moment";
import Link from "next/link";

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
  tag: PartialTag;
};

const ReadingTime: FC<{ readingTime: number }> = ({ readingTime }) => {
  return (
    <div className="mt-3 flex items-center space-x-1">
      <Image src={"/icons/book.png"} height={40} width={40} className="" alt="book" />
      <h6 className=" text-sm">{readingTime} minutes read</h6>
    </div>
  );
};

const BlogCard: FC<{ blog: CardBlog }> = ({ blog }) => {
  return (
    <div className=" w-[22rem] overflow-hidden rounded-xl border-2 border-gray-700 bg-white shadow-xl transition-all dark:border-gray-700 dark:bg-cd-dark   dark:hover:bg-gray-300/5">
      <Image
        src={`/images/blogs/${blog.imageUrl}`}
        height={300}
        width={350}
        className=""
        alt={blog.title}
      />
      <div className="content px-5 py-3">
        <h5 className="text-gray-60  text-xl font-semibold">
          {moment(new Date(blog.createdAt)).format("MMMM Do YY")}
        </h5>
        <h1 className="mt-2 line-clamp-2 h-20  text-2xl font-bold tracking-wide">{blog.title}</h1>
        <p className="line-clamp-3" title={"sdfqdsqd"}>
          sicing elit. Fugit, quod. Aspernatur voluptatem quos veniam eius nesciunt? Quaerat
          veritatis, fugit, molestias delectus excepturi, magnam commodi perspiciatis numquam quis
          aliquam optio consectetur?
        </p>
        <div className="mt-2 flex flex-wrap items-center  text-lg">
          {blog.TagsForArticle.length > 0 && <TagPill tag={blog.TagsForArticle[0].Tag} />}
          <ReadingTime readingTime={blog.readingTime} />
        </div>
        <Link
          href={`/blogs/${blog.slug}`}
          className="mt-5 block w-fit  rounded bg-violet-900 px-3 py-2 text-white transition-colors hover:bg-violet-950"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
