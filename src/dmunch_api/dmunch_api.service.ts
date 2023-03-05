import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { predict } from '../../dmunch/index';

@Injectable()
export class DmunchApiService {
  constructor(private prisma: PrismaService) {}

  async predict_method() {
    let database = await this.prisma.record.findMany({});

    database.forEach(async (element) => {
      const {
        id,
        debth_month,
        contract_status,
        qnt_incident,
        qnt_calls,
        qnt_port_res,
        payment_sum,
        subscription_price,
      } = element;
      let abs = Number(payment_sum) - Number(subscription_price);
      let prediction = predict([
        Number(debth_month),
        Number(contract_status),
        Number(qnt_incident),
        abs,
        Number(qnt_calls),
        Number(qnt_port_res),
      ]);

      await this.prisma.record.update({
        data: {
          prediction_rate: prediction,
        },
        where: {
          id,
        },
      });
      console.log('Updated');
    });
    return true;
  }
}
