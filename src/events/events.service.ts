import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.event.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.event.findFirst({
      where: {
        id,
      },
    });
  }

  async create(data: Prisma.EventCreateInput) {
    const formattedData = {
      ...data,
      date: new Date(data.date),
    };
    return this.databaseService.event.create({
      data: formattedData,
    });
  }

  async update(id: string, data: Prisma.EventUpdateInput) {
    // Check if the event exists
    const eventExists = await this.databaseService.event.findUnique({
      where: {
        id: +id,
      },
    });

    if (!eventExists) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    // Proceed to update the event
    return this.databaseService.event.update({
      where: {
        id: +id,
      },
      data,
    });
  }

  async delete(id: string) {
    return this.databaseService.event.delete({
      where: {
        id: +id,
      },
    });
  }
}
