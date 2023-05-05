import { GetStaticProps } from "next";
import TagsCarousel from "@/components/tags/TagsCarousel";
import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import { PrismaClient, Tag } from "@prisma/client";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const stintUltra = Stint_Ultra_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint-ultra",
});

// const tags: Tag[] = [
//   {
//     title: "React Libary",
//     slug: "react-libary",
//     url: "react.png",
//   },
//   {
//     title: "Java",
//     slug: "java",
//     url: "java.jpg",
//   },
//   {
//     title: "Algorithmes & Data Structures",
//     slug: "algorithmes",
//     url: "algorithmes.webp",
//   },
//   {
//     title: "Kotlin",
//     slug: "kotlin",
//     url: "kotlin.webp",
//   },
//   {
//     title: "Tailwind Css",
//     slug: "tailwind-css",
//     url: "tailwindcss.png",
//   },
//   {
//     title: "TypeScript",
//     slug: "typeScript",
//     url: "typescript.webp",
//   },
//   {
//     title: "Spring Boot",
//     slug: "Spring",
//     imageName: "spring.jpg",
//   },
// ];

export const getStaticProps: GetStaticProps<{ tags: Tag[] }> = async () => {
  const prismaInstance = new PrismaClient();
  const tags = await prismaInstance.tag.findMany({
    take: 16,
  });

  return { props: { tags } };
};

export default function Home(props: { tags: Tag[] }) {
  return (
    <main className="">
      <TagsCarousel tags={props.tags} />
    </main>
  );
}
