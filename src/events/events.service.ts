import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create.dto';
import { UpdateEventDto } from './dto/update.dto';

@Injectable()
export class EventsService {
  findAll() {
    return 'All data are returned';
  }

  findOne(id: string) {
    return `data with ID #${id} is returned`;
  }

  create(data: CreateEventDto) {
    return {
      message: 'data are created',
      data,
    };
  }
  update(id: string, data: UpdateEventDto) {
    return {
      message: `item with ID #${id} is updated with data:`,
      data,
    };
  }
  delete(id: string) {
    return `data with ID #${id} is deleted`;
  }
}
