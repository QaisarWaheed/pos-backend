import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InventoryService } from '../services/inventory.service';
import { AddProductDto } from '../dtos/AddProduct.dto';
import { UpdateProductDto } from '../dtos/UpdateProduct.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Inventory')
@Controller('inventory')
export class InventoryController {
  constructor(private readonly productService: InventoryService) {}

  @Get('/get-all-[roducts')
  async getAllProducts() {
    return await this.productService.findProduct();
  }

  @Get('/gfet-product-by-id/:id')
  async getProductById(@Param('id') id: string) {
    return await this.productService.findById(id);
  }

  @Post('/add-product')
  async addProduct(@Body() data: AddProductDto) {
    return await this.productService.addProduct({ ...data });
  }

  @Put('/update-product/:id')
  async updateProduct(@Param('id') id: string, @Body() data: UpdateProductDto) {
    return await this.productService.updateProduct(id, { ...data });
  }

  @Delete('/delete-by-id/:id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
