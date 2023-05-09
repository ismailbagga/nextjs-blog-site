import Link from "next/link";
import React, { FC } from "react";

const BlogHeader: FC<{ href: string; title: string; index: number }> = ({ href, title, index }) => {
  return (
    <Link
      href={`./#${href}`}
      className="w-fit border-b-2 border-b-black px-3 transition-colors hover:text-blue-500"
    >
      <span className="mr-1 font-bold">#{index} </span>
      {title}
    </Link>
  );
};

export default BlogHeader;
