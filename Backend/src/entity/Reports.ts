import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Double, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(['id'])
export class tbrevisar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cCodPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  dtFecReg: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cCvePer: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  nInvAPrd: number;


  @Column()
  @MinLength(5)
  @IsNotEmpty()
  nRevPrd: Boolean;
}
function AutoincrementColum() {
  throw new Error("Function not implemented.");
}

