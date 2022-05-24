import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.historical_audit' })
export class HistoricalAuditModel {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public function_name: string;

    @Column()
    public description: string;

    @Column()
    public input_data: string;

    @Column()
    public output_data: string;

    @Column({type:'timestamp'})
    public create_on: Date;

    @Column({type:'timestamp'})
    public modifier_on!: Date;

    constructor(function_name: string, description: string, input_data: string, output_data: string, create_on: Date){
        this.function_name = function_name;
        this.description = description;
        this.input_data = input_data;
        this.output_data = output_data;
        this.create_on = create_on;
    }
}
