import { Controller, Get } from '@nestjs/common';
import { DmunchApiService } from './dmunch_api.service';

@Controller('dmunch-api')
export class DmunchApiController {
  constructor(private munchService: DmunchApiService) {}

  @Get()
  async changePredictDB() {
    await this.munchService.predict_method();
  }
}
