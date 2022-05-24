import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.config' })
export class ConfigModel {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public description: string;

    @Column()
    public configuration_type: string;

    @Column({ type: 'timestamp'})
    public create_on: Date;

    @Column({ type: 'timestamp'})
    public modifier_on!: Date;

    constructor(description: string, configuration_type: string, create_on: Date){
        this.description = description;
        this.configuration_type = configuration_type;
        this.create_on = create_on;
    }
}
