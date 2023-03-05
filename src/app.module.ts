import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContractModule } from './contract/contract.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [PrismaModule, ContractModule, HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
