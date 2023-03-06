import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Record } from '@prisma/client';
import { DmunchApiService } from 'src/dmunch_api/dmunch_api.service';

@Injectable()
export class ContractService {
  constructor(
    private prisma: PrismaService,
    private dmunch_service: DmunchApiService,
  ) {}

  @Get()
  async posts() {
    let data = await this.prisma.record.findMany({ take: 10 });
    let result: Array<{ 0: Record; 1: number }> = [];

    data.forEach(async (element) => {
      const {
        debth_month,
        contract_status,
        qnt_incident,
        qnt_calls,
        qnt_port_res,
        payment_sum,
        subscription_price,
      } = element;
      let abs = Number(payment_sum) - Number(subscription_price);
      let prediction = await this.dmunch_service.predict_method([
        Number(debth_month),
        Number(contract_status),
        Number(qnt_incident),
        abs,
        Number(qnt_calls),
        Number(qnt_port_res),
      ]);
      let contractPredicted = { 0: element, 1: prediction };
      result.push(contractPredicted);
    });

    return result;
  }
}
