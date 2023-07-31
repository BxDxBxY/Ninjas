import { ApiProperty } from '@nestjs/swagger';
import { MinLength, IsEnum } from 'class-validator';

export class CreateNinjaDto {
  @ApiProperty({
    description: 'The name of the Ninja',
    example: 'Jojo Satoru',
  })
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsEnum(['stars', 'nunchucks'], { message: 'Use correct Weapon!' })
  weapon: 'stars' | 'nunchucks';
}
