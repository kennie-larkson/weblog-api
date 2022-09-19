import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class CommentEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public body: string;
}
