import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'rich_db.user' })
export class UserModel {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public login: string;

    @Column()
    public password: string;

    @Column({ type: 'timestamp' })
    public create_on: Date;

    @Column({ type: 'timestamp' })
    public modifier_on!: Date;

    // @OneToOne(() => Permission)
    // public permission: Permission;

    constructor(id: number, login: string, password: string, create_on: Date
        // permission: Permission
    ){
        this.id = id;
        this.login = login;
        this.password = password;
        this.create_on = create_on;
        // this.permission = permission;
    }
}
