import React, { FC, HTMLAttributes } from "react";
export type Tag = {
  title: string;
  slug: string;
  imageName: string;
};
export type Tags = Tag[];
const TagCard: FC<{ tag: Tag }> = ({ tag }) => {
  return (
    <div className="h-48   w-full flex justify-center  ">
      <div className="relative h-full  w-[20rem]  rounded-xl">
        {/* <Image src={`/tags/${tag.imageName}`} height={400} width={300} alt={tag.title} /> */}
        <img
          src={`/tags/${tag.imageName}`}
          alt={tag.title}
          className="w-full h-full  rounded-xl  "
        />
        <div
          id="content"
          className="absolute flex items-center justify-center w-full h-full top-0 left-0 rounded-xl bg-black/70"
        >
          <h1 className="text-white text-2xl sm:text-3xl w-full text-center font-medium">
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
