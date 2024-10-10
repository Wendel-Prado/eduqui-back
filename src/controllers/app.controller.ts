import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getApi(): string {
    return 'Forneça uma rota';
  }
}
