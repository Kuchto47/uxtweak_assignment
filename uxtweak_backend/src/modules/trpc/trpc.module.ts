import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { TrpcUiController } from './trpc-ui.controller';

@Module({
  imports: [
    TRPCModule.forRoot({
      basePath: '/trpc',
    }),
  ],
  controllers: [TrpcUiController],
  providers: [],
})
export class TrpcModule {}
