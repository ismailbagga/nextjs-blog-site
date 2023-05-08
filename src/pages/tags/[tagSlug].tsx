import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Blog, PrismaClient, Tag } from "@prisma/client";
import BlogsList from "@/components/blogs/BlogsList";
import { CardBlog } from "../blogs";
import Head from "next/head";

type props = { blogs: CardBlog[]; tag: Tag };

export const getStaticProps: GetStaticProps<props> = async (context) => {
  const { params } = context;

  const instance = new PrismaClient();
  const tagSlug = (params as any).tagSlug as string;
  const tag = (await instance.tag.findFirst({
    where: {
      slug: tagSlug,
    },
  })) as Tag;
  const blogsOfTag = (await instance.blog.findMany({
    include: {
      TagsForArticle: {
        select: {
          Tag: true,
        },
        where: {
          primary: true,
        },
      },
    },
    where: {
      TagsForArticle: {
        some: {
          Tag: {
            slug: tagSlug,
          },
        },
      },
    },
  })) satisfies CardBlog[];
  return {
    props: {
      tag,
      blogs: JSON.parse(JSON.stringify(blogsOfTag)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const instance = new PrismaClient();
  const tagsSlug = await instance.tag.findMany({ select: { slug: true } });
  const params = tagsSlug.map((item) => item.slug).map((slug) => ({ params: { tagSlug: slug } }));
  return {
    paths: params,
    fallback: false,
  };
};

const BlogOfTagPage: FC<props> = ({ blogs, tag }) => {
  return (
    <>
      <Head>
        <title>{`Blogs Of  ${tag.title} (${blogs.length})`}</title>
      </Head>
      <h1 className="mx-auto w-fit font-dsf text-4xl sm:text-6xl lg:text-8xl">
        {tag.title} Blogs ({blogs.length})
      </h1>
      <BlogsList title="Latest Blogs" blogs={blogs} />
    </>
  );
};

export default BlogOfTagPage;
