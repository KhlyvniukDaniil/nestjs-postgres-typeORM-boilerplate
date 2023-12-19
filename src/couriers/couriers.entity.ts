import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsString } from 'class-validator';
import { Delivery } from 'src/deliveries/deliveries.entity';

@Entity('couriers')
export class Courier {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ nullable: false })
  name: string;

  @IsString()
  @Column({ nullable: false, unique: true })
  phoneNumber: string;

  @OneToMany(() => Delivery, (delivery) => delivery.courier)
  deliveriesHistory: Delivery[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  constructor(partial?: Partial<Courier>) {
    Object.assign(this, partial);
  }
}
