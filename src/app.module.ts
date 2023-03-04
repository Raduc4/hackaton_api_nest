import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContractModule } from './contract/contract.module';
import { DmunchApiModule } from './dmunch_api/dmunch_api.module';

@Module({
  imports: [PrismaModule, ContractModule, DmunchApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
