import { Module } from '@nestjs/common';
import { UsersModule } from './lib/User/infrastructure/NestJs/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmUserEntity } from './lib/User/infrastructure/TypeORM/TypeOrmUserEntity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [TypeOrmUserEntity],
    }),
    
    UsersModule
  ],
})

export class AppModule {
  
}
