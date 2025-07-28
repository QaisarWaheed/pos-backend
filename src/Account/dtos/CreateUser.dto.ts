import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '../entities/user.entity';

export class CreateUser {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: Roles;
}
