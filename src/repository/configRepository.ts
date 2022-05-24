import {ConfigModel} from '../model/configModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class ConfigRepository {
    private connOptions!: ConnectionOptions;

    public async findAll(qry = {}): Promise<ConfigModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [ConfigModel]);
        const repository = await createRepository(this.connOptions, ConfigModel);
        const result: ConfigModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }
}
