import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './Account/account.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/pointofsale'),
    AccountModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
