import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

enum InvoiceStatus {
  Unpaid = 'Unpaid',
  Paid = 'Paid',
  PartiallyPaid = 'PartiallyPaid',
  OverDue = 'OverDue',
}

@Schema({ timestamps: true })
export class Invoice {
  declare _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty()
  @Prop()
  invoiceDate: Date;

  @ApiProperty()
  @Prop()
  customerName: string;

  @ApiProperty({ enum: InvoiceStatus, default: InvoiceStatus.Unpaid })
  @Prop({ enum: InvoiceStatus, default: InvoiceStatus.Unpaid })
  invoiceStatus: InvoiceStatus;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Products' })
  productName: string;

  @ApiProperty()
  @Prop()
  tax: number;
}
