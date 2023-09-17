import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class crud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
//   @Column({ default: "NA" })
  // @Column({  type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  age: Number;
}


