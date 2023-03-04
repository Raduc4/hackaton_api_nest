import { Controller, Get } from '@nestjs/common';
import { DmunchApiService } from './dmunch_api.service';

@Controller('dmunch-api')
export class DmunchApiController {
  constructor(private p_service: DmunchApiService) {}

  @Get()
  async getPredict() {
    this.p_service.predict_method();
  }
}
