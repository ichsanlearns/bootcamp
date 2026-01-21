export interface IUser {
  id: number;
  name: string;
  email: string;
  role: "CUSTOMER" | "EVENT_ORGANIZER";
}
