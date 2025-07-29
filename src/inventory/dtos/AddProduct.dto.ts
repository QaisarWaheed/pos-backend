import { ApiProperty } from '@nestjs/swagger';

export class AddProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  sku: string;

  @ApiProperty()
  hsCode: string;

  @ApiProperty()
  productDescription: string;

  @ApiProperty()
  supplier: string;

  @ApiProperty()
  productWeight: number;

  @ApiProperty()
  productPurchasePrice: number;

  @ApiProperty()
  ProductSalePrice: number;

  @ApiProperty()
  currentStock: number;

  @ApiProperty()
  minimumStock: number;
}
