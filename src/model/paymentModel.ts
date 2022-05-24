import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.payment' })
export class PaymentModel {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public value: number;

    @Column()
    public discount?: number;

    @Column({type:'timestamp'})
    public due_date: Date;

    @Column({type:'timestamp'})
    public due_payment?: Date;

    @Column()
    public paid: boolean;

    @Column({type:'timestamp'})
    public create_on: Date;

    @Column({type:'timestamp'})
    public modifier_on!: Date;

    // @ManyToOne(() => Person, (person: Person) => person.payments)
    // public person: Person;

    constructor(value: number, discount: number, due_date: Date, due_payment: Date, paid: boolean, create_on: Date
        // , person: Person
    ){
        this.value = value;
        this.discount = discount;
        this.due_date = due_date;
        this.due_payment = due_payment;
        this.paid = paid;
        this.create_on = create_on;
        // this.person = person;
    }
}
