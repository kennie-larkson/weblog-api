import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column()
  public email: string;

  @Column()
  public password: string;
}
