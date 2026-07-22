import { PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base-entity.entity';

export abstract class BaseUuidEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
