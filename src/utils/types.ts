import { HTMLProps } from "react";

export type Page = {
    name: string;
    ref?: React.MutableRefObject<null>;
    link?: string;
    img: string;
  }

export type ArticleType = {
  id: number,
  primaryImage: string,
  title: string,
  summary : string,
  content: JSX.Element[]
};


