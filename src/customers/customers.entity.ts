import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsString } from 'class-validator';
import { Order } from 'src/orders/orders.entity';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ nullable: false })
  name: string;

  @IsEmail()
  @Column({ nullable: false, unique: true })
  email: string;

  @IsString()
  @Column({ nullable: false, unique: true })
  address: string;

  @IsString()
  @Column({ nullable: false, unique: true })
  phoneNumber: string;

  @OneToMany(() => Order, (order) => order.customer, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  orders: Order[];

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

  constructor(partial?: Partial<Customer>) {
    Object.assign(this, partial);
  }
}
