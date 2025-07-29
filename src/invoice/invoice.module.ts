import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import challanSchema, { Challan } from 'src/challan/entity/challan.entity';
import { InvoiceController } from './controllers/invoice.controller';
import { InvoiceService } from './services/invoice.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Challan.name, schema: challanSchema }]),
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
