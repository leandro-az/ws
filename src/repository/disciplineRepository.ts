import {DisciplineModel} from '../model/disciplineModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class DisciplineRepository {
    private connOptions!: ConnectionOptions;

    public async findAll(qry = {}): Promise<DisciplineModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [DisciplineModel]);
        const repository = await createRepository(this.connOptions, DisciplineModel);
        const result: DisciplineModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }
}
