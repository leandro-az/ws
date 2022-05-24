import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.discipline' })
export class DisciplineModel {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name: string;

    @Column()
    public description: string;

    @Column({type: 'timestamp'})
    public create_on: Date;

    @Column({type: 'timestamp'})
    public modifier_on!: Date;

    // @OneToOne(() => Person)
    // public professor: Person;

    constructor(name: string, description: string, create_on: Date
        // professor: Person
    ){
        this.name = name;
        this.description = description;
        this.create_on = create_on;
        // this.professor = professor;
    }
}
