import {EvaluationModel} from '../model/evaluationModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class EvaluationRepository {
    private connOptions!: ConnectionOptions;

    public async findAll(qry = {}): Promise<EvaluationModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [EvaluationModel]);
        const repository = await createRepository(this.connOptions, EvaluationModel);
        const result: EvaluationModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }
}
