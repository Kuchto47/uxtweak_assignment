import { PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base-entity.entity';

export abstract class BaseUuidEntityEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
