import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.class' })
export class ClassModel {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name: string;

    @Column({ type: 'timestamp'})
    public init_date: Date;

    @Column({ type: 'timestamp'})
    public final_date!: Date;

    @Column()
    public amount: number;

    @Column({ type: 'timestamp'})
    public create_on: Date;

    @Column({ type: 'timestamp'})
    public modifier_on!: Date;

    // @OneToMany(() => Person, (studant: Person) => studant.studant_class)
    // public studants!: Person[];

    // @OneToMany(() => EvaluationModel, (evaluation: EvaluationModel) => evaluation.studant_class)
    // public evaluations!: EvaluationModel[];

    // @ManyToMany(() => DisciplineModel)
    // @JoinTable()
    // disciplines!: DisciplineModel[];

    constructor(name: string, init_date: Date, amount: number, create_on: Date) {
        this.name = name;
        this.init_date = init_date;
        this.amount = amount;
        this.create_on = create_on;
    }
}
