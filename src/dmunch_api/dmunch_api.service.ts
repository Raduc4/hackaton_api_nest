import { Injectable } from '@nestjs/common';
import { predict } from '../../dmunch/index';

@Injectable()
export class DmunchApiService {
  async predict_method() {
    console.log(predict([0, 1, 2, 3, 4, 5, 6]));
  }
}
