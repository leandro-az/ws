import {PermissionModel} from '../model/permissionModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class PermissionRepository {
    private connOptions!: ConnectionOptions;

    public async findOne(qry = {}): Promise<PermissionModel|undefined> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [PermissionModel]);
        const repository = await createRepository(this.connOptions, PermissionModel);
        const result: PermissionModel|undefined = await repository.findOne(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async findAll(qry = {}): Promise<PermissionModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [PermissionModel]);
        const repository = await createRepository(this.connOptions, PermissionModel);
        const result: PermissionModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async createOne(permissionModel: PermissionModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PermissionModel]);
            repository = await createRepository(this.connOptions, PermissionModel);
            await repository.save(permissionModel);
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

    public async deleteOne(permissionModel: PermissionModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PermissionModel]);
            repository = await createRepository(this.connOptions, PermissionModel);
            await repository.delete(permissionModel);
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

    public async updateOne(permissionModel: PermissionModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PermissionModel]);
            repository = await createRepository(this.connOptions, PermissionModel);
            await repository.save(permissionModel);
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
