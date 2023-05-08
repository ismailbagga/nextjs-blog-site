import { GetStaticProps } from "next";
import TagsCarousel from "@/components/tags/TagsCarousel";
import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import { Blog, PrismaClient, Tag, TagsForArticle } from "@prisma/client";
import BlogsList from "@/components/blogs/BlogsList";
import { json } from "stream/consumers";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const stintUltra = Stint_Ultra_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint-ultra",
});

export type CardBlog = Blog & {
  TagsForArticle: {
    Tag: Tag;
  }[];
};
export const getStaticProps: GetStaticProps<{
  tags: Tag[];
  blogs: CardBlog[];
}> = async () => {
  const prismaInstance = new PrismaClient();
  const tags = await prismaInstance.tag.findMany({
    take: 16,
  });

  const blogs = await prismaInstance.blog.findMany({
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      TagsForArticle: {
        select: {
          Tag: true,
        },
        where: {
          primary: true,
        },
        take: 1,
      },
    },
  });

  return { props: { tags, blogs: JSON.parse(JSON.stringify(blogs)) } };
};

export default function Home(props: { tags: Tag[]; blogs: CardBlog[] }) {
  return (
    <main className="">
      <TagsCarousel tags={props.tags} />
      <BlogsList title="Latest Blogs" blogs={props.blogs} />
    </main>
  );
}
