import { ComponentType } from "react";

export enum PostCategory {
  Guitar = "guitar",
  Theory = "theory",
  Reflections = "reflections",
  Production = "production",
  Resources = "resources",
}

export enum PostAuthor {
  ErpProject = "erpproject",
}

export interface Post {
  id: string;
  category: PostCategory;
  title: string;
  description: string;
  content: ComponentType;
  date: Date;
  author: PostAuthor;
}
