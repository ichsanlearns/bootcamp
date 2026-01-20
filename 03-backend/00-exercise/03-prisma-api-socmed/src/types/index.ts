export interface IUserData {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUserData {
  name?: string;
  email?: string;
  password?: string;
}

export interface IPost {
  title: string;
  content: string;
  imageUrl?: string;
  authorId: string;
}

export interface IUpdatePost {
  title?: string;
  content?: string;
  imageUrl?: string;
  authorId?: string;
}

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};
