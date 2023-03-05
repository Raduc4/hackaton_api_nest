import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { DmunchApiService } from 'src/dmunch_api/dmunch_api.service';

@Module({
  providers: [ContractService, DmunchApiService],
  controllers: [ContractController],
})
export class ContractModule {}
