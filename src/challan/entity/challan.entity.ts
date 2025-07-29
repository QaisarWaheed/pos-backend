import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

@Schema()
export class Challan {
  declare _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty()
  @Prop()
  challanDate: Date;

  @ApiProperty()
  @Prop()
  customerName: string;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Products' })
  productName: string;

  @ApiProperty()
  @Prop()
  productQuantity: number;

  declare createdAt: Date;
  declare updatedAt: Date;
}
const challanSchema = SchemaFactory.createForClass(Challan);
export default challanSchema;
