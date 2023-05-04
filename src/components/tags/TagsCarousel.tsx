import React, { FC, ReactNode, useState } from "react";
import TagCard, { Tag } from "./TagCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselBtn: FC<{ children: ReactNode; className: string; onClickHandler: () => void }> = (
  props
) => {
  return (
    <button
      className={`block z-50 absolute top-1/2   -translate-y-1/2 ${props.className}`}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1900 },
    items: 5,
    slidesToSlide: 1,
  },
  normalLargeDesktop: {
    breakpoint: { max: 1900, min: 1430 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1430, min: 1080 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 730 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 730, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const customLeftArrow = (
  <div className="absolute arrow-btn left-0  text-center py-3 px-2 cursor-pointer  bg-pink-600/95 rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  </div>
);

const customRightArrow = (
  <div className="absolute arrow-btn right-0 text-center py-3 px-2 cursor-pointer bg-pink-600 rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </div>
);
const TagsCarousel: FC<{ tags: Tag[] }> = ({ tags }) => {
  return (
    <main className="mx-5 mt-10 ">
      <Carousel
        responsive={responsive}
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        swipeable
        draggable
        className=""
        infinite
      >
        {tags.map((tag) => (
          <TagCard key={tag.slug} tag={tag} />
        ))}
      </Carousel>
    </main>
  );
};

export default TagsCarousel;
