import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { createConnection, Connection, EntitySchema, Repository, ObjectType } from 'typeorm';

type ConnectionOptions = PostgresConnectionOptions;

export async function createConn(opt: ConnectionOptions): Promise<Connection> {
    try {
        const connection = await createConnection(opt);
        return connection;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createRepository<T>(options: ConnectionOptions, model: ObjectType<T> | EntitySchema<T> | string): Promise<Repository<T>> {
    console.log('entrou create repository');
    console.log(options);
    const conn = await createConn(options);
    console.log('saiu create repository ',conn);
    return conn.getRepository(model);
}
