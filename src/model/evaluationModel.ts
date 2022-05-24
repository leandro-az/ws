import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.evaluation' })
export class EvaluationModel {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public grade: number;

    @Column()
    public description!: string;

    @Column({type: 'timestamp'})
    public evaluation_Date: Date;

    @Column({type: 'timestamp'})
    public create_on: Date;

    @Column({type: 'timestamp'})
    public modifier_on!: Date;

    // @ManyToOne(() => Class, (studant_class: Class) => studant_class.evaluations)
    // public studant_class: Class;

    constructor(grade: number, evaluation_date: Date, create_on: Date
        // , studant_class: Class
    ){
        this.grade = grade;
        this.evaluation_Date = evaluation_date;
        this.create_on = create_on;
        // this.studant_class = studant_class;
    }
}
