import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.model/user.model';

@Controller('auth')
export class AuthController {
constructor(private authService: AuthService) {}


@HttpCode(HttpStatus.OK)
@Post('login')
async signIn(@Body() user: User) {
    return this.authService.signIn(user.username, user.password);
}

//For testing purposes - remove when done
@UseGuards(AuthGuard)
@Get('profile')
async getProfile(@Body() user: User) {
    return "hello" +user+ " Welcome";
}

}