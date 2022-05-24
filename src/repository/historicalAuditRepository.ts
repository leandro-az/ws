import {HistoricalAuditModel} from '../model/historicalAuditModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class HistoricalAuditRepository {
    private connOptions!: ConnectionOptions;

    public async findOne(qry = {}): Promise<HistoricalAuditModel|undefined> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [HistoricalAuditModel]);
        const repository = await createRepository(this.connOptions, HistoricalAuditModel);
        const result: HistoricalAuditModel|undefined = await repository.findOne(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async findAll(qry = {}): Promise<HistoricalAuditModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [HistoricalAuditModel]);
        const repository = await createRepository(this.connOptions, HistoricalAuditModel);
        const result: HistoricalAuditModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async createOne(historicalAudit: HistoricalAuditModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [HistoricalAuditModel]);
            repository = await createRepository(this.connOptions, HistoricalAuditModel);
            await repository.save(historicalAudit);
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

    public async deleteOne(historicalAudit: HistoricalAuditModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [HistoricalAuditModel]);
            repository = await createRepository(this.connOptions, HistoricalAuditModel);
            await repository.delete(historicalAudit);
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

    public async updateOne(historicalAudit: HistoricalAuditModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [HistoricalAuditModel]);
            repository = await createRepository(this.connOptions, HistoricalAuditModel);
            await repository.save(historicalAudit);
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
