export type Page = {
    name: string;
    ref?: React.MutableRefObject<null>;
    link?: string;
    img: string;
  }

export type ArticleType = {
  id: number,
  title: string,
  summary : string,
  content: ContentType[]
};

type ContentType = TextType | ImageType | VideoType | LinkType;

type Content = 'text' | 'image' | 'video' | 'link';

type FontType = 'paragraph' | 'subheader' | 'header' | 'superheader'

type PositionType = 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

type TextType = {
  type: Content,
  value: string,
  font?: FontType,
};

type ImageType = {
    type: Content,
    src: string,
    description?: string,
    size?: number
    position?: PositionType,
}

type VideoType = {
  type: Content,
  src: string,
  description?: string,
  size?: number
  position?: PositionType,
}

type LinkType = {
  type: Content,
  to: string,
  text?: string,
  img_src?: string,
  img_size?: string,
}

