import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { User } from '../entities/user.entity';
import { CreateUser } from '../dtos/CreateUser.dto';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly userService: AccountService) {}

  @Get('/all-users')
  async allUsers(): Promise<User[] | null> {
    return await this.userService.findUser();
  }

  @Get('/user-by-id/:id')
  async findUserById(@Param('id') id: string): Promise<User | null> {
    return await this.userService.findUserById(id);
  }

  @Post('/create-new-user')
  async addNewUser(@Body() data: CreateUser) {
    return await this.userService.createUser(data);
  }

  @Put('/update-user/:id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return await this.userService.UpdateUser(id, { ...data });
  }

  @Delete('/delete-user-by-id/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
