export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconError: boolean | string;
  isSaved: boolean;
}

export type Benefits = Benefit[];
