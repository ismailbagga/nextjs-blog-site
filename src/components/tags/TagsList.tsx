import { Tag } from "@prisma/client";
import React, { FC } from "react";
import TagPill from "./TagPill";

const TagsList: FC<{ tags: Tag[]; className?: string }> = ({ tags, className }) => {
  return (
    <div className={`rounded bg-white px-2 py-3 shadow ${className}`}>
      <h1 className="mb-5 border-b-2 pb-3 pl-3 text-3xl  font-bold">Tags</h1>
      {tags.map((t) => (
        <TagPill key={t.id} tag={t} />
      ))}
    </div>
  );
};

export default TagsList;
