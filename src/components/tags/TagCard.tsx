import React, { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { Tag } from "@prisma/client";
// export type Tag = {
//   title: string;
//   slug: string;
//   imageName: string;
// };
// export type Tags = Tag[];
const TagCard: FC<{ tag: Tag }> = ({ tag }) => {
  return (
    <div className="flex   h-48 w-full justify-center  ">
      <div className="relative h-full  w-[20rem]  rounded-xl ">
        <Image
          src={`/images/tags/${tag.url}`}
          fill
          alt={tag.title}
          className="rounded-xl"
        />
        <div
          id="content"
          className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-xl bg-black/70"
        >
          <h1 className="w-full text-center text-2xl font-medium text-white sm:text-3xl">
            {tag.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TagCard;
// index = 4 8 12 16 20
// 4*k = x
//x/4 = k

// x/2 = 2k
