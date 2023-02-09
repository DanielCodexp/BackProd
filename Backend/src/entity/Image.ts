import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(['cCodPrd'])
export class tbimagenes {

  @PrimaryColumn()
  @MinLength(5)
  @IsNotEmpty()
  cCodPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  image: string;
}
