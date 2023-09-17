import { Module } from '@nestjs/common';
import config from './typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    UsersModule],
 
})
export class AppModule {}
