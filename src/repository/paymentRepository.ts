import {PaymentModel} from '../model/paymentModel';
import { getConnectionOptions } from '../config/typeOrmConfig';
import { createRepository /* , createConn */} from '../config/typeOrmConnection';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Service} from 'typedi';


type ConnectionOptions = PostgresConnectionOptions;
@Service()
export class PaymentRepository {
    private connOptions!: ConnectionOptions;

    public async findOne(qry = {}): Promise<PaymentModel|undefined> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [PaymentModel]);
        const repository = await createRepository(this.connOptions, PaymentModel);
        const result: PaymentModel|undefined = await repository.findOne(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async findAll(qry = {}): Promise<PaymentModel[]> {
        this.connOptions = await getConnectionOptions('SCHEDULE', [PaymentModel]);
        const repository = await createRepository(this.connOptions, PaymentModel);
        const result: PaymentModel[] = await repository.find(qry);
        await repository.manager.connection.close();
        return result;
    }

    public async createOne(paymentModel: PaymentModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PaymentModel]);
            repository = await createRepository(this.connOptions, PaymentModel);
            await repository.save(paymentModel);
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

    public async deleteOne(paymentModel: PaymentModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PaymentModel]);
            repository = await createRepository(this.connOptions, PaymentModel);
            await repository.delete(paymentModel);
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

    public async updateOne(paymentModel: PaymentModel): Promise<boolean>{
        let repository;
        try {
            this.connOptions = await getConnectionOptions('SCHEDULE', [PaymentModel]);
            repository = await createRepository(this.connOptions, PaymentModel);
            await repository.save(paymentModel);
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
