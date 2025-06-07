export interface ProjectDescriptionBlock {
  id: string;
  type: string;
  data: {
    text?: string;
    level?: number;
    link?: string;
    items?: string[];
    style?: string;
  };
}

export interface ProjectDescription {
  time: number;
  blocks: ProjectDescriptionBlock[];
  version: string;
}

export interface ProjectPhoto {
  id: number;
  catalog: string;
  name: string;
  project_files: {
    id: number;
    fileId: number;
    projectId: number;
  };
}

export interface Project {
  id: number;
  title: string;
  description: ProjectDescription;
  slug: string;
  works: string;
  equipment: string;
  short_description: ProjectDescription;
  customer: string;
  date: string;
  published: boolean;
  photos: ProjectPhoto[];
}

export type Projects = Project[];
