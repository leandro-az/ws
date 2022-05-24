import {PersonModel} from '../model/personModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class PersonRepository {
    private connOptions!: ConnectionOptions;

    public async findOne(qry = {}): Promise<PersonModel|undefined> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [PersonModel]);
        const repository = await createRepository(this.connOptions, PersonModel);
        const result: PersonModel|undefined = await repository.findOne(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async findAll(qry = {}): Promise<PersonModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [PersonModel]);
        const repository = await createRepository(this.connOptions, PersonModel);
        const result: PersonModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async createOne(personModel: PersonModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PersonModel]);
            repository = await createRepository(this.connOptions, PersonModel);
            await repository.save(personModel);
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

    public async deleteOne(personModel: PersonModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PersonModel]);
            repository = await createRepository(this.connOptions, PersonModel);
            await repository.delete(personModel);
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

    public async updateOne(personModel: PersonModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PersonModel]);
            repository = await createRepository(this.connOptions, PersonModel);
            await repository.save(personModel);
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
