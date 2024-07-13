import { CarSpecification } from '@/car-specifications/entities/car-specification.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'model',
    type: 'varchar',
  })
  model: string;

  @Column({
    name: 'type',
    type: 'varchar',
  })
  type: string;

  @Column({
    name: 'image',
    type: 'varchar',
  })
  image: string;

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  price: number;

  @Column({
    name: 'is_favorite',
    type: 'boolean',
  })
  isFavorite: boolean;

  @ManyToOne(
    () => CarSpecification,
    (carSpecification) => carSpecification.cars,
  )
  @JoinColumn({
    name: 'car_specifications_id',
  })
  specs: CarSpecification;
}
