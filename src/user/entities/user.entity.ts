import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @ObjectType()
// export class User {
//   @Field(() => Int, { description: 'Example field (placeholder)' })
//   exampleField: number;
// }

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
}
