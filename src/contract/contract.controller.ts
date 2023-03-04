import { Controller, Get } from '@nestjs/common';
import { ContractService } from './contract.service';
import { Record } from '@prisma/client';

@Controller('contract')
export class ContractController {
  constructor(private contractService: ContractService) {}

  @Get('/')
  async getMany(): Promise<Record[]> {
    return await this.contractService.posts();
  }
}
