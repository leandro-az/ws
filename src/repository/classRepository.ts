import {ClassModel} from '../model/classModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class ClassRepository {
    private connOptions!: ConnectionOptions;

    public async findAll(qry = {}): Promise<ClassModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [ClassModel]);
        const repository = await createRepository(this.connOptions, ClassModel);
        const result: ClassModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }
}
