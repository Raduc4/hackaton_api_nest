import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContractModule } from './contract/contract.module';
import { HelloModule } from './hello/hello.module';
import { DmunchApiModule } from './dmunch_api/dmunch_api.module';

@Module({
  imports: [PrismaModule, ContractModule, HelloModule, DmunchApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
