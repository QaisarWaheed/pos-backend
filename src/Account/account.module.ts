import { Module } from '@nestjs/common';
import { AccountController } from './controllers/account.controller';
import { AccountService } from './services/account.service';
import { MongooseModule } from '@nestjs/mongoose';
import userSchema, { User } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
