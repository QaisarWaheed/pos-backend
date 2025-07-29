import { Module } from '@nestjs/common';
import { ChallanController } from './controller/challan.controller';
import { ChallanService } from './service/challan.service';

@Module({
  controllers: [ChallanController],
  providers: [ChallanService],
})
export class ChallanModule {}
