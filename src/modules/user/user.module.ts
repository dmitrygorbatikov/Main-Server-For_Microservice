import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserSharedModule } from './user-shared.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [UserController],
  imports: [
    UserSharedModule,
    ClientsModule.register([
      { name: 'AUTH_SERVICE', transport: Transport.TCP },
    ]),
  ],
})
export class UserModule {}
