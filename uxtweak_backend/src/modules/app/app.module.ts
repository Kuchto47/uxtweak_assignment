import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../../db/data-source';
import { ChatModule } from '../chat/chat.module';
import { TrpcModule } from '../trpc/trpc.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      autoLoadEntities: true,
    }),
    ChatModule,
    TrpcModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
