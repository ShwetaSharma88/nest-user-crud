import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {crud} from './entities/user.entity'
import config from 'src/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([crud])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
