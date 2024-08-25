import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsControllerController } from './events-controller/events-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, EventsControllerController],
  providers: [AppService],
})
export class AppModule {}
