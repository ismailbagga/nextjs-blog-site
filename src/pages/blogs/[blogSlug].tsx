import { ReadingTime } from "@/components/blogs/BlogCard";
import TagsList from "@/components/tags/TagsList";
import { prismaClientInstance } from "@/utils/prismaClient";
import { Blog, Tag, TagsForArticle } from "@prisma/client";
import moment from "moment";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { FC } from "react";
import fs from "fs/promises";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import path from "path";
import BlogSideCard from "@/components/blogs/BlogSideCard";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import BlogHeader from "@/components/blogs/BlogHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dark,
  atomDark,
  darcula,
  duotoneDark,
  funky,
  tomorrow,
  nightOwl,
  vsDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import TagPill from "@/components/tags/TagPill";
export type BlogPreview =  {
    slug: string;
    createdAt: Date;
    id: number;
    title: string;
    imageUrl: string;
} | null
type PageProps = {
  blog: Blog & {
    markdown: string;
    prev : BlogPreview ,
    next : BlogPreview ,
    headers: { [key: string]: string };
    TagsForArticle: (TagsForArticle & {
      Tag: Tag;
    })[];
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { params } = context;
  console.log(params?.blogSlug);

  const blog = await prismaClientInstance.blog.findFirst({
    include: {
      TagsForArticle: {
        include: {
          Tag: true,
        },
      },
    },
    where: {
      slug: params?.blogSlug as string,
    },
  });
  if (!blog)
  return {
    notFound: true,
  };
  console.log(blog);
  
  const createdAtDate = blog?.createdAt ; 
  const nextBlog = await prismaClientInstance.blog.findFirst({
    select : {
      id : true , 
      slug : true , 
      title : true ,
      imageUrl : true , 
      createdAt : true 
    },
    where : {
      createdAt : {
        gte : createdAtDate
      } ,
      id : {
        not : {
          equals : blog.id
        }
      }
      
    } ,
    orderBy : {
      createdAt : 'asc'
    } ,
    take : 1 
    
  })
   const prevBlog = await prismaClientInstance.blog.findFirst({
      select : {
      id : true , 
      slug : true , 
      title : true ,
      imageUrl : true , 
      createdAt : true 
    },
    where : {
      createdAt : {
        lte : createdAtDate
      } ,
      id : {
        not : {
          equals : blog.id
        }
      }
      
    } ,
    orderBy : {
      createdAt : 'desc'
    } ,
    take : 1 
    
  })
  const filePath = path.join(process.cwd(), "src", "posts", blog.markdownUrl);
  const data = await fs.readFile(filePath, "utf-8");
  const { content: markdown, data: headers } = matter(data);

  return {
    props: { blog: JSON.parse(JSON.stringify({ ...blog, markdown, headers , prev : prevBlog , next : nextBlog })) },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsSlugs = await prismaClientInstance.blog.findMany({ select: { slug: true } });
  const params = blogsSlugs.map((s) => s.slug).map((s) => ({ params: { blogSlug: s } }));
  return {
    paths: params,
    fallback: false,
  };
};

const BlogDetailPage: FC<PageProps> = ({ blog }) => {
  const tags = blog.TagsForArticle.map((toa) => toa.Tag);
  
              
  return (
    <main className="mx-10 grid grid-cols-12  grid-rows-[min-content_min-content_max-content] gap-5">
      {/* <TagsList className="col-span-3 self-start" tags={tags} /> */}
      <BlogSideCard title="Tags" className="pb-10 col-span-3 self-start ">
         {tags.map((t) => (
        <TagPill key={t.id} tag={t} />
      ))}
      </BlogSideCard>
      <BlogSideCard title="Headers" className="col-span-3 col-start-10  flex flex-col space-y-2">
        {Object.keys(blog.headers).map((headKey, index) => (
          <BlogHeader
            key={headKey}
            title={blog.headers[headKey]}
            href={headKey}
            index={index + 1}
          />
        ))}
      </BlogSideCard>
      {/* <div id="headers" className=" h-10  rounded bg-white">
        <h1></h1>
      </div> */}
      <article className="col-span-9 row-span-full ml-2">
        <h5 className="w-fit text-xl  text-white px-5 py-2 rounded-xl shadow hover:bg-black/75 transition-all bg-black">
            {moment(new Date(blog.createdAt)).format("MMMM Do YYYY")}
          </h5>
        <h1 className=" font-dsf text-8xl mt-3">{blog.title}</h1>
        <Image
          src={`/images/blogs/${blog.imageUrl}`}
          alt="Blog Image"
          className=" rounded-md mt-10 shadow-2xl shadow-slate-600"
          height={100}
          width={1000}
        />
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className=" prose mt-10 w-full max-w-none font-blf text-sm dark:prose-invert  prose-pre:bg-transparent   prose-hr:border-gray-600"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              

              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, "")}
                  style={vscDarkPlus}
                  language={match[1]}
                  codeTagProps={{style  : {fontFamily : 'var(--font-hack)'}}}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {blog.markdown}
        </ReactMarkdown>
      </article>
      {/* {blog.next && <h1>{blog.next.title}</h1>}
      {blog.prev && <h1>{blog.prev.title}</h1>} */}
    </main>
  );
};

export default BlogDetailPage;
