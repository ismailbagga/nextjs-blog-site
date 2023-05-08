import React, { FC, useState } from "react";
import BlogCard from "./BlogCard";
import { CardBlog } from "@/pages/blogs";
import classes from "./BlogList.module.css";
import BlogSearchField from "./BlogSearchField";

const BlogsList: FC<{ blogs: CardBlog[]; title?: string }> = ({ blogs, title }) => {
  const [page, setPage] = useState(1);
  const [filtredBlogs, setFiltredBlogs] = useState([...blogs, ...blogs, ...blogs]);
  const onTermChanged = (term: string) => {
    console.log(term);

    const result = blogs.filter((b) => b.title.toLowerCase().includes(term.toLowerCase()));
    console.log(result);

    setFiltredBlogs([...result]);
  };
  console.log(filtredBlogs);

  return (
    <div className="mx-10 mt-14">
      <BlogSearchField onChange={onTermChanged} />
      <div
        className={`relative grid min-h-[35rem]  items-start justify-items-center gap-y-10 ${classes["blogs-list"]}`}
      >
        {filtredBlogs.length === 0 && (
          <h1 className="col-span-full font-dsf text-4xl">No Blogs Were Found</h1>
        )}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
        {filtredBlogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}a
      </div>
    </div>
  );
};

export default BlogsList;
