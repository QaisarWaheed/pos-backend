import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export enum Category {
  OfficeSupplies = 'Office Supplies',
  Travel = 'Travel',
  Utilities = 'Utilities',
  Rent = 'Rent',
}

@Schema({ timestamps: true })
export class Expense {
  declare _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty()
  @Prop()
  person: string;

  @ApiProperty({ enum: Category, default: Category.OfficeSupplies })
  @Prop({ enum: Category, default: Category.OfficeSupplies })
  category: Category;

  @ApiProperty()
  @Prop()
  dateOfExpense: Date;

  @ApiProperty()
  @Prop()
  amount: number;

  declare createAt: Date;
  declare updatedAt: Date;
}
const expenseSchema = SchemaFactory.createForClass(Expense);
export default expenseSchema;
