import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.person' })
export class PersonModel {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public name: string;

    @Column()
    public last_name: string;

    @Column()
    public under_age: boolean;

    @Column()
    public telfone: string;

    @Column()
    public email: string;

    @Column()
    public email_answerable!: string;

    @Column()
    public telfone_answerable!: string;

    @Column({ type: 'timestamp' })
    public create_on: Date;

    @Column({ type: 'timestamp' })
    public modifier_on!: Date;

    // @OneToOne(() => UserModel)
    // public id_user: UserModel;

    // @OneToMany(() => Payment, (payment: Payment) => payment.person)
    // public payments: Payment[];

    // @ManyToOne(() => Class, (studant_class: Class) => studant_class.studants)
    // public studant_class: Class;

    // @OneToOne(() => DisciplineModel, (discipline: DisciplineModel) => discipline.professor)
    // public discipline: DisciplineModel;

    constructor(
        name: string, last_name: string, under_age: boolean,
        telfone: string, email: string, email_answerable: string,
        telfone_answerable: string, create_on: Date
        // id_user: UserModel, payments: Payment[],
        // studant_class: Class, discipline: DisciplineModel
    ){
        this.name = name;
        this.last_name = last_name;
        this.under_age = under_age;
        this.telfone = telfone;
        this.email = email;
        this.email_answerable = email_answerable;
        this.telfone_answerable = telfone_answerable;
        this.create_on = create_on;
        // this.id_user = id_user;
        // this.payments = payments;
        // this.studant_class = studant_class;
        // this.discipline = discipline;
    }
}
