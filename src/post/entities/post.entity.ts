import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class PostEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public body: string;

  @Column()
  public title: string;
}
