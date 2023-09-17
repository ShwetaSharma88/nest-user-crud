import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { crud } from './users/entities/user.entity';
const config: TypeOrmModuleOptions = {
  type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'shweta@123',
    database: 'mydb',
  entities: [crud], 
  synchronize: true, 
};

export default config;