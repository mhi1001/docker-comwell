import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model/user.model';

//http://yourdomain.com/users/
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService) {}

//http://yourdomain.com/users/register
  @Post('register')
  async register(@Body() user: User): Promise<User> {
    return this.usersService.CreateUser(user);
  }
  

  
}
