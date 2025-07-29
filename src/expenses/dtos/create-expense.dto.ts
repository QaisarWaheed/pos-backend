import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../entities/expense.entity';

export class CreateExpenseDto {
  @ApiProperty()
  person: string;

  @ApiProperty({ enum: Category, default: Category.OfficeSupplies })
  category: Category;

  @ApiProperty({ type: Date })
  expenseDate: Date;

  @ApiProperty()
  amount: number;
}
