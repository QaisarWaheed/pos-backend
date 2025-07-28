import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import productSchema, { Products } from './entities/products.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Products.name, schema: productSchema }]),
  ],
})
export class InventoryModule {}
