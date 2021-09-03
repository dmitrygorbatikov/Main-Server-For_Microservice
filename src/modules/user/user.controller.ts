import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
  Headers,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  ConfirmEmailResponse,
  LoginResponse,
  RegisterResponse,
} from './types/user.types';
import { RegisterDto } from './dto/register.dto';
import { ConfirmEmailDto } from './dto/confirm-email.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    @Inject('AUTH_SERVICE') private client: ClientProxy,
  ) {}

  @Post('/register')
  register(
    @Body() body: RegisterDto,
    @Query() query,
  ): Observable<RegisterResponse> {
    return this.client.send(
      { register: 'body' },
      { code: body.code, email: query.email },
    );
  }

  @Post('/email/confirm-email')
  public confirmEmail(
    @Body() body: ConfirmEmailDto,
  ): Observable<ConfirmEmailResponse> {
    return this.client.send({ confirmEmail: 'body' }, body);
  }

  @Post('/login')
  public login(@Body() body: LoginDto): Observable<LoginResponse> {
    return this.client.send({ login: 'body' }, body);
  }

  @Get('/profile')
  public getUserProfile(@Headers() headers) {
    return this.client.send({ profile: 'body' }, headers.token);
  }

  @Put()
  public updateUserData(@Headers() headers, @Body() body: UpdateUserDto) {
    return this.client.send({ update: 'body' }, { token: headers.token, body });
  }
}
