import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Challan } from '../entity/challan.entity';
import { Model } from 'mongoose';
import { CreateChallanDto } from '../dto/CreateChallanDto';
import { UpdateChallanDto } from '../dto/UpdateChallanDto';

@Injectable()
export class ChallanService {
  constructor(
    @InjectModel(Challan.name) private readonly challanModule: Model<Challan>,
  ) {}

  async createChallan(data: CreateChallanDto): Promise<Challan | null> {
    const newChallan = await this.challanModule.create({ ...data });
    if (!newChallan) {
      throw new BadRequestException('some thing went wrong');
    }
    return newChallan;
  }

  async getAllChallans(): Promise<Challan[] | null> {
    return await this.challanModule.find();
  }

  async getChallanById(id: string): Promise<Challan | null> {
    const challan = await this.challanModule.findById(id);
    if (!challan) {
      throw new NotFoundException('no challan found against this Id');
    }
    return challan;
  }

  async updateChallan(
    id: string,
    data: UpdateChallanDto,
  ): Promise<Challan | null> {
    const updateChallan = await this.challanModule.findByIdAndUpdate(id, {
      ...data,
    });
    if (!updateChallan) {
      throw new NotFoundException('no challan found against this Id ');
    }
    return updateChallan;
  }

  async deleteChallan(id: string) {
    const challan = await this.challanModule.findByIdAndDelete(id);
    if (!challan) {
      throw new NotFoundException('no challan found against this Id');
    }
    return { message: 'deleted successfuly' };
  }
}
