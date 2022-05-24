import {UserModel} from '../model/userModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class UserRepository {
    private connOptions!: ConnectionOptions;

    public async findOne(qry = {}): Promise<UserModel|undefined> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [UserModel]);
        const repository = await createRepository(this.connOptions, UserModel);
        const result: UserModel|undefined = await repository.findOne(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async findAll(qry = {}): Promise<UserModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [UserModel]);
        const repository = await createRepository(this.connOptions, UserModel);
        const result: UserModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async createOne(user: UserModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [UserModel]);
            repository = await createRepository(this.connOptions, UserModel);
            await repository.save(user);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            try {
                if (repository) {
                    await repository.manager.connection.close();
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    public async deleteOne(user: UserModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [UserModel]);
            repository = await createRepository(this.connOptions, UserModel);
            await repository.delete(user);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            try {
                if (repository) {
                    await repository.manager.connection.close();
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    public async updateOne(user: UserModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [UserModel]);
            repository = await createRepository(this.connOptions, UserModel);
            await repository.save(user);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            try {
                if (repository) {
                    await repository.manager.connection.close();
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
