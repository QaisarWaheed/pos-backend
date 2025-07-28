import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUser } from '../dtos/CreateUser.dto';
import { NotFoundError } from 'rxjs';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(data: CreateUser): Promise<User | null> {
    const user = await this.userModel.findOne({ email: data.email });
    if (user) {
      throw new ConflictException('user Already exists with this email');
    }
    const newUser = await this.userModel.create(data);
    return newUser;
  }

  async findUser(): Promise<User[] | null> {
    return await this.userModel.find();
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('No user found against this Id');
    }
    return user;
  }

  async UpdateUser(id: string, data: UpdateUserDto): Promise<User | null> {
    const user = await this.userModel.findByIdAndUpdate(
      id,
      { ...data },
      { new: true },
    );
    if (!user) {
      throw new NotFoundException('no user found against this ID');
    }
    return user;
  }

  async deleteUser(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException('no Account Found Against this ID');
    }
    return { message: 'deleted Successfuly' };
  }
}
