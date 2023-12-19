import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from 'src/orders/orders.entity';
import { Courier } from 'src/couriers/couriers.entity';

@Entity('deliveries')
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order, (order) => order.delivery)
  order: Order;

  @ManyToOne(() => Courier, (courier) => courier.deliveriesHistory, {
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  courier: Courier;

  @Column()
  deliveryStatus: OrderStatus;

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

  constructor(partial?: Partial<Delivery>) {
    Object.assign(this, partial);
  }
}
