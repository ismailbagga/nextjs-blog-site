import React, { FC } from "react";

const throtle = (delay: number, cb: any) => {};

const LoadMoreBtn: FC<{ loadMore: (page: number) => void }> = () => {
  return (
    <button className="mx-auto my-10 block rounded-xl bg-gray-600 px-5 py-3">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
