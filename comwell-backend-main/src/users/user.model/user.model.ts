import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { asyncScheduler } from 'rxjs';


@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;
  
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  full_name: string;

  @Prop()
  address?: string;

  

  // Method signature - Add to implement it this way to be recognized
  comparePassword: (attempt: string) => Promise<boolean>;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

//And then specify the implementation here so the method can be used per each instance
UserSchema.methods.comparePassword =async function (attempt: string): Promise<boolean> {
  return await bcrypt.compare(attempt, this.password);
};
