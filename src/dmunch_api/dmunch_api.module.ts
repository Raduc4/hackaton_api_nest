import { Module } from '@nestjs/common';
import { DmunchApiService } from './dmunch_api.service';
import { DmunchApiController } from './dmunch_api.controller';

@Module({
  providers: [DmunchApiService],
  controllers: [DmunchApiController],
})
export class DmunchApiModule {}
