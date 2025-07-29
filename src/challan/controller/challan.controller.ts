import { ApiTags } from '@nestjs/swagger';
import { CreateChallanDto } from '../dto/CreateChallanDto';
import { UpdateChallanDto } from '../dto/UpdateChallanDto';
import { ChallanService } from './../service/challan.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@ApiTags('Challans')
@Controller('challan')
export class ChallanController {
  constructor(private readonly challanService: ChallanService) {}

  @Post('/create-challan')
  async createChallan(@Body() data: CreateChallanDto) {
    return await this.challanService.createChallan(data);
  }

  @Get('/get-all-challans')
  async getAllChallans() {
    return await this.challanService.getAllChallans();
  }

  @Get('/get-challan-by-id/:id')
  async getChallanById(@Param('id') id: string) {
    return await this.challanService.getChallanById(id);
  }

  @Put('/update-challan/:id')
  async updateChallan(@Param('id') id: string, @Body() data: UpdateChallanDto) {
    return await this.challanService.updateChallan(id, { ...data });
  }

  @Delete('/delete-challan/:id')
  async deleteChallan(@Param('id') id: string) {
    return await this.challanService.deleteChallan(id);
  }
}
