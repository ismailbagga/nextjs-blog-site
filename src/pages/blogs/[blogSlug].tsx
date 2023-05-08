import { prismaClientInstance } from "@/utils/prismaClient";
import { Blog, Tag, TagsForArticle } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
type PageProps = {
  blog:
    | Blog & {
        TagsForArticle: (TagsForArticle & {
          Tag: Tag;
        })[];
      };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { params } = context;
  const blog = await prismaClientInstance.blog.findFirst({
    include: {
      TagsForArticle: {
        include: {
          Tag: true,
        },
      },
    },
    where: {
      slug: params?.slug as string,
    },
  });
  if (!blog)
    return {
      notFound: true,
    };
  return {
    props: { blog: JSON.parse(JSON.stringify(blog)) },
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
  console.log(blog);

  return <div>BlogDetailPage</div>;
};

export default BlogDetailPage;
