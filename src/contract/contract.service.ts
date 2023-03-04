import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Record } from '@prisma/client';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}

  async posts() {
    return await this.prisma.record.findMany({ take: 10 });
  }
}
