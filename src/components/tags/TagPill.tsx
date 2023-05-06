import React, { FC } from "react";
import { PartialTag } from "../blogs/BlogCard";
import Link from "next/link";

const TagPill: FC<{ tag: PartialTag }> = ({ tag }) => {
  return (
    <Link
      href={tag.slug}
      className="mr-3 mt-3 rounded-md bg-gray-700  px-4 py-2 text-sm font-medium text-white dark:bg-gray-500"
    >
      Algorithmes & Data Structures{/* {tag.title} */}
    </Link>
  );
};

export default TagPill;
