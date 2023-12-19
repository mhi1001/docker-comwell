import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}
    
    async signIn(username, password) {

        //Check user credentials
        const user = await this.usersService.findByUsername(username);
        
        if (!user || !(await user.comparePassword(password))) {
            console.log(user)
            throw new UnauthorizedException('Invalid credentials');
        }

        //Return jwt token so it can be used to access protected routes
        const payload = { sub: user._id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}