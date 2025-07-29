import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpenseService } from '../services/expense.service';
import { CreateExpenseDto } from '../dtos/create-expense.dto';
import { UpdateExpenseDto } from '../dtos/update-expense.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post('/add-expense')
  async addExpense(@Body() data: CreateExpenseDto) {
    return await this.expenseService.addExpense(data);
  }

  @Get('/get-all-expense')
  async getAllExpenses() {
    return await this.expenseService.getAllExpenses();
  }

  @Get('/getById/:id')
  async getExpenseById(@Param('id') id: string) {
    return await this.expenseService.getExpenseById(id);
  }

  @Put('/update-expense/:id')
  async updateExpense(@Param('id') id: string, @Body() data: UpdateExpenseDto) {
    return await this.expenseService.udpateExpense(id, { ...data });
  }

  @Delete('/delete-expense/:id')
  async deleteExpense(@Param('id') id: string) {
    return await this.expenseService.deleteById(id);
  }
}
