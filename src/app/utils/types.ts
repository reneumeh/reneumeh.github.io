import { HTMLProps, ReactElement } from "react";

export type Page = {
    name: string;
    ref?: React.MutableRefObject<null>;
    link?: string;
    img: ReactElement;
  }

export type ArticleType = {
  id: number,
  primaryImage: string,
  title: string,
  summary : string,
  content: JSX.Element[]
};

export type Award = {
  name: string;
  image: string;
}

