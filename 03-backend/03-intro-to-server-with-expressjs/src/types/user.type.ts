export interface IUser {
  id: number;
  fullName: string;
  age: number;
  gender: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}
