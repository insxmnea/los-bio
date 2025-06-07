export interface SlideImage {
  id: number;
  catalog: string;
  name: string;
  isDeleted: boolean;
}

export interface Slide {
  id: number;
  sort: string;
  title: string;
  description: string;
  btnText: string;
  link: string;
  image: SlideImage[];
  isSaved: boolean;
  deleted: boolean;
}

export type Slides = Slide[];
