import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './Account/account.module';
import { InventoryModule } from './inventory/inventory.module';
import { ChallanModule } from './challan/challan.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ExpenseController } from './expense/expense.controller';
import { ExpenseService } from './expense/expense.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/pointofsale'),
    AccountModule,
    InventoryModule,
    ChallanModule,
    InvoiceModule,
    ExpensesModule,
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class AppModule {}
