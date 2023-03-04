import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContractModule } from './contract/contract.module';

@Module({
  imports: [PrismaModule, ContractModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
