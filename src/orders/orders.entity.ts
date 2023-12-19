import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from 'src/customers/customers.entity';
import { IsDate, IsString } from 'class-validator';
import { OrderItem } from 'src/order-items/order-items.entity';
import { Delivery } from 'src/deliveries/deliveries.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (user) => user.orders, { eager: true })
  @JoinColumn({ name: 'id' })
  customer: Customer;

  @OneToMany(() => OrderItem, (item) => item.order, { eager: true })
  @JoinColumn({ name: 'id' })
  orderItems: OrderItem[];

  @OneToOne(() => Delivery, (delivery) => delivery.order)
  delivery: Delivery;

  @IsString()
  @Column()
  deliveryAddress: string;

  @IsString()
  @Column()
  orderStatus: OrderStatus;

  @IsDate()
  @Column({ type: 'timestamp' })
  orderDate: Date;

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

  constructor(partial?: Partial<Order>) {
    Object.assign(this, partial);
  }
}
