import { Controller, Get } from '@nestjs/common';
import { ContractService } from './contract.service';
import { Record } from '@prisma/client';

@Controller('contract')
export class ContractController {
  constructor(private contractService: ContractService) {}

  @Get('/')
  async getMany(): Promise<{ 0: Record; 1: number }[]> {
    return await this.contractService.posts();
  }
}
