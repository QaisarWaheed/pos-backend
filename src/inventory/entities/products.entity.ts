import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Products {
  declare _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  sku: string;

  @ApiProperty()
  @Prop()
  hsCode: string;

  @ApiProperty()
  @Prop()
  productDescription: string;

  @ApiProperty()
  @Prop()
  supplier: string;

  @ApiProperty()
  @Prop()
  productWeight: number;

  @ApiProperty()
  @Prop()
  productPurchasePrice: number;

  @ApiProperty()
  @Prop()
  ProductSalePrice: number;

  @ApiProperty()
  @Prop()
  currentStock: number;

  @ApiProperty()
  @Prop()
  minimumStock: number;

  declare createAt: Date;
  declare updatedAt: Date;
}
const productSchema = SchemaFactory.createForClass(Products);
export default productSchema;
