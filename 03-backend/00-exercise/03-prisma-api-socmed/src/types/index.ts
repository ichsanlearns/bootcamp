export interface IUserData {
  name: string;
  email: string;
  password: string;
}

export interface IPost {
  title: string;
  content: string;
  imageUrl?: string;
  authorId: string;
}
