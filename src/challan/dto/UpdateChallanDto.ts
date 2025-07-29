import { ApiProperty } from '@nestjs/swagger';

export class UpdateChallanDto {
  @ApiProperty()
  challanDate: Date;

  @ApiProperty()
  cusotmerName: string;

  @ApiProperty()
  productName: string;

  @ApiProperty()
  productQuantity: number;
}
