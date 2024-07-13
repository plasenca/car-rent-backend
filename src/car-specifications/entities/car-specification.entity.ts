import { Car } from '@/cars/entities/car.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum Transmission {
  MANUAL = 'manual',
  AUTOMATIC = 'automatic',
}

@Entity('car_specifications')
export class CarSpecification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'fuel',
    type: 'varchar',
  })
  fuel: string;

  @Column({
    name: 'transmission',
    type: 'enum',
    enum: Transmission,
  })
  transmission: Transmission;

  @Column({
    name: 'capacity',
    type: 'decimal',
    precision: 1000,
    scale: 2,
  })
  capacity: number;

  @OneToMany(() => Car, (car) => car.specs)
  cars: Car[];
}
