import React, { FC, useState } from "react";
import BlogCard from "./BlogCard";
import { CardBlog } from "@/pages/blogs";
import classes from "./BlogList.module.css";
import BlogSearchField from "./BlogSearchField";

const BlogsList: FC<{ blogs: CardBlog[]; title?: string }> = ({ blogs, title }) => {
  const [page, setPage] = useState(1);
  const [filtredBlogs, setFiltredBlogs] = useState([...blogs, ...blogs, ...blogs]);
  const onTermChanged = (term: string) => {
    const result = blogs.filter((b) => b.title.toLowerCase().includes(term.toLowerCase()));
    setFiltredBlogs(result);
  };
  return (
    <div className="mx-10 mt-14">
      <BlogSearchField onChange={onTermChanged} />
      <div
        className={` grid min-h-[35rem]  items-start justify-items-center gap-y-10 ${classes["blogs-list"]}`}
      >
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
