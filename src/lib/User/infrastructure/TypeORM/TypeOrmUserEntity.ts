import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class TypeOrmUserEntity{
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    createdAt: Date
}
