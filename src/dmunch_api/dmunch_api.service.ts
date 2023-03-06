import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { predict } from '../../dmunch/index';

@Injectable()
export class DmunchApiService {
  constructor(private prisma: PrismaService) {}

  async predict_method(data: number[]) {
    return predict(data);
  }
}
