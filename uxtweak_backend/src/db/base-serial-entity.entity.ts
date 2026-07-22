import { PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base-entity.entity';

export abstract class BaseSerialEntityEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
