import { TagWithCount } from "@/pages/tags";
import Link from "next/link";
import React, { FC } from "react";

const TagsWithBlogsCount: FC<{ tag: TagWithCount }> = ({ tag }) => {
  return (
    <Link
      href={`/tags/${tag.slug}`}
      className="mr-10 mt-4 flex  items-center overflow-hidden rounded border-2 border-gray-900  text-lg   text-white dark:border-gray-400"
    >
      <h1 className="inline-block whitespace-nowrap px-3 py-1 text-xl font-semibold text-black dark:text-white">
        {tag.title}
      </h1>
      <span className="ml-1 flex h-full w-full items-center bg-gray-900 px-3 text-xl dark:text-black text-white dark:bg-gray-400 ">
        {tag._count.TagsForArticle}
      </span>
    </Link>
  );
};

export default TagsWithBlogsCount;
