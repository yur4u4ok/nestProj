import { Document } from 'mongoose';
export interface IUser extends Document {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  boss_id?: string;
}

export interface Payload {
  email: string;
}
