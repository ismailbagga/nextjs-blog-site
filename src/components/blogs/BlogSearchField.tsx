import React, { FC } from "react";

const BlogSearchField: FC<{ onChange: (term: string) => void }> = ({ onChange }) => {
  return (
    <div className="mx-auto mb-14 max-w-[50rem]">
      <input
        className="w-full  rounded border-[3px] border-green-500 bg-transparent px-3 py-2"
        placeholder="Search Posts"
        onChange={(e: any) => onChange(e.target.value)}
      />
    </div>
  );
};

export default BlogSearchField;
