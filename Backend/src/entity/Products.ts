import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(['cCodPrd'])
export class tbproductos {
  @PrimaryColumn()
  cCodPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cDesPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cPosPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cDesUM: string;
}
