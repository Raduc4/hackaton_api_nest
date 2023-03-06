import { Module } from '@nestjs/common';
import { DmunchApiService } from './dmunch_api.service';

@Module({
  providers: [DmunchApiService],
  controllers: [],
})
export class DmunchApiModule {}
