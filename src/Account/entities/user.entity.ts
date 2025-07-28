import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Mongoose } from 'mongoose';

export enum Roles {
  Admin = 'Admin',
  Vendor = 'Vendor',
  Accountant = 'Accountant',
}

@Schema({ timestamps: true })
export class User {
  declare _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ select: false })
  password: string;

  @ApiProperty({ enum: Roles })
  @Prop({ enum: Roles, default: Roles.Accountant })
  role: Roles;

  createAt: Date;
  updateAt: Date;
}

const userSchema = SchemaFactory.createForClass(User);
export default userSchema;
