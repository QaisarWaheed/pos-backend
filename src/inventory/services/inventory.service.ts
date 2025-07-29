import { Products } from './../entities/products.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddProductDto } from '../dtos/AddProduct.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Products.name) private readonly productModel: Model<Products>,
  ) {}

  async addProduct(data: AddProductDto): Promise<Products | null> {
    const newProduct = await this.productModel.create(data);
    return newProduct;
  }

  async findProduct(): Promise<Products[] | null> {
    return await this.productModel.find();
  }

  async findById(id: string): Promise<Products | null> {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('no product found');
    }
    return product;
  }

  async updateProduct(
    id: string,
    data: AddProductDto,
  ): Promise<Products | null> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      { ...data },
      { new: true },
    );
    if (!updatedProduct) {
      throw new NotFoundException('no product found against this Id');
    }

    return updatedProduct;
  }

  async deleteProduct(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) {
      throw new NotFoundException('no Product found against this Id');
    }

    return { message: 'deleted Successfuly' };
  }
}
