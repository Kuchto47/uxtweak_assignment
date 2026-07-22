import { PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base-entity.entity';

export abstract class BaseSerialEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
