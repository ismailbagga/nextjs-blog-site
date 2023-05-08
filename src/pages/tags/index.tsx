import TagsWithBlogsCount from "@/components/tags/TagsWithBlogsCount";
import { PrismaClient, Tag } from "@prisma/client";
import { GetStaticProps } from "next";
import React, { FC } from "react";

export type TagWithCount = Tag & {
  _count: {
    TagsForArticle: number;
  };
};

type TagsPageProps = { tags: TagWithCount[] };
export const getStaticProps: GetStaticProps<TagsPageProps> = async () => {
  const prisma = new PrismaClient();
  const tags = await prisma.tag.findMany({
    include: {
      _count: {
        select: { TagsForArticle: true },
      },
    },
  });
  console.log(tags);

  return {
    props: { tags: tags },
  };
};
const TagsPage: FC<TagsPageProps> = ({ tags }) => {
  return (
    <div className="mx-10 flex flex-wrap">
      {tags.map((t) => (
        <TagsWithBlogsCount key={t.id} tag={t} />
      ))}
      {tags.map((t) => (
        <TagsWithBlogsCount key={t.id} tag={t} />
      ))}
      {tags.map((t) => (
        <TagsWithBlogsCount key={t.id} tag={t} />
      ))}
    </div>
  );
};

export default TagsPage;
