import { Tags } from "@/components/tags/TagCard";
import TagsCarousel from "@/components/tags/TagsCarousel";
import { Inter, Stint_Ultra_Condensed } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const stintUltra = Stint_Ultra_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint-ultra",
});

const tags: Tags = [
  {
    title: "React Libary",
    slug: "react-libary",
    imageName: "react.png",
  },
  {
    title: "Java",
    slug: "java",
    imageName: "java.jpg",
  },
  {
    title: "Algorithmes & Data Structures",
    slug: "algorithmes",
    imageName: "algorithmes.webp",
  },
  {
    title: "Kotlin",
    slug: "kotlin",
    imageName: "kotlin.webp",
  },
  {
    title: "Tailwind Css",
    slug: "tailwind-css",
    imageName: "tailwindcss.png",
  },
  {
    title: "TypeScript",
    slug: "typeScript",
    imageName: "typescript.webp",
  },
  {
    title: "Spring Boot",
    slug: "Spring",
    imageName: "spring.jpg",
  },
];

export default function Home() {
  return (
    <main className="">
      <TagsCarousel tags={tags} />
    </main>
  );
}
