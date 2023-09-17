



import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { crud } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(crud)
    private readonly userRepository: Repository<crud>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<crud> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<crud[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<crud | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<crud| undefined> {
    await this.userRepository.update(id, updateUserDto);
     return await this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}