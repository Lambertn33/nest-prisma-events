import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty({
    message: 'The title field is required',
  })
  title: string;

  @IsNotEmpty({
    message: 'The description field is required',
  })
  description: string;

  @IsNotEmpty()
  date: string;
}
