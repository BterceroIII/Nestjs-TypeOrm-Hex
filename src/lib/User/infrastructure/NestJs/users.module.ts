import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { TypeOrmUserRepository } from '../TypeORM/TypeOrmUserRepository';
import { UserGetAll } from '../../application/UserGetAll/UserGetAll';
import { UserGetOneById } from '../../application/UserGetOneById/UserGetOneById';
import { UserCreate } from '../../application/UserCreate/UserCreate';
import { UserEdit } from '../../application/UserEdit/UserEdit';
import { UserDelete } from '../../application/UserDelete/UserDelete';
import { TypeOrmUserEntity } from '../TypeORM/TypeOrmUserEntity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmUserEntity])],
  controllers: [UsersController],
  providers: [
    {
        provide: 'UserRepository',
        useClass: TypeOrmUserRepository
    },
    {
      provide: 'UserGetAll',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserGetAll(repository),
      inject: ['UserRepository'],
    },

    {
      provide: 'UserGetOneById',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserGetOneById(repository),
      inject: ['UserRepository'],
    },

    {
      provide: 'UserCreate',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserCreate(repository),
      inject: ['UserRepository'],
    },

    {
      provide: 'UserEdit',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserEdit(repository),
      inject: ['UserRepository'],
    },

    {
      provide: 'UserDelete',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserDelete(repository),
      inject: ['UserRepository'],
    },
  ],
})
export class UsersModule {}
