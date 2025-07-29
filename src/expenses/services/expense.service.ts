import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense } from '../entities/expense.entity';
import { CreateExpenseDto } from '../dtos/create-expense.dto';
import { UpdateExpenseDto } from '../dtos/update-expense.dto';
@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name) private readonly expenseModel: Model<Expense>,
  ) {}

  async addExpense(data: CreateExpenseDto): Promise<Expense | null> {
    return await this.expenseModel.create(data);
  }

  async getAllExpenses(): Promise<Expense[] | null> {
    return await this.expenseModel.find();
  }

  async getExpenseById(id: string): Promise<Expense | null> {
    const expense = await this.expenseModel.findById(id);
    if (!expense) {
      throw new NotFoundException('no Expense found against this Id');
    }
    return expense;
  }

  async udpateExpense(
    id: string,
    data: UpdateExpenseDto,
  ): Promise<Expense | null> {
    const updatedExpense = await this.expenseModel.findByIdAndUpdate(id, data);
    if (!updatedExpense) {
      throw new NotFoundException('no expense found against this Id');
    }
    return updatedExpense;
  }

  async deleteById(id: string) {
    const deleteExpense = await this.expenseModel.findByIdAndDelete(id);
    if (!deleteExpense) {
      throw new NotFoundException('no expense found against thsi Id');
    }
    return deleteExpense;
  }
}
