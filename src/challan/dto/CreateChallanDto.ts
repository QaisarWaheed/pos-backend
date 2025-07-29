import { ApiProperty } from '@nestjs/swagger';

export class CreateChallanDto {
  @ApiProperty()
  challanDate: Date;

  @ApiProperty()
  cusotmerName: string;

  @ApiProperty()
  productName: string;

  @ApiProperty()
  productQuantity: number;
}
