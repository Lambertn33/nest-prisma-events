import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Prisma } from '@prisma/client';
import { CreateEventDto } from './dto/create.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) data: CreateEventDto) {
    return this.eventsService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.EventUpdateInput) {
    return this.eventsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eventsService.delete(id);
  }
}
