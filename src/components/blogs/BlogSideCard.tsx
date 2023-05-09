import React, { FC, ReactNode } from "react";

const BlogSideCard: FC<{ title: string; className?: string; children: ReactNode }> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className={`rounded border-[1px] dark:border-gray-500  bg-white dark:bg-cd-dark  px-2 py-3 shadow ${className}`}>
      <h1 className="mb-5 border-b-2 pb-3 pl-3 text-3xl  font-bold">{title}</h1>
      {children}
    </div>
  );
};
export default BlogSideCard;
