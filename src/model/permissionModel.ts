import {Column, Entity,PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.permission' })
export class PermissionModel {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public description: string;

    @Column({ type: 'timestamp' })
    public create_on: Date;

    @Column({ type: 'timestamp' })
    public modifier_on!: Date;

    // @OneToOne(() => UserModel, (user: UserModel) => user.permission)
    // public user: UserModel;

    constructor(description: string, create_on: Date
        // user: UserModel
    ){
        this.description = description;
        this.create_on = create_on;
        // this.user = user;
    }
}
