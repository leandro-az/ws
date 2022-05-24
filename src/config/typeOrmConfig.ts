import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {ObjectType} from 'typeorm';

type ConnectionOptions = PostgresConnectionOptions;


export async function getConnectionOptions<T>(name: string, models: Array<ObjectType<T>>): Promise<ConnectionOptions> {
    // const ssm = new SSMAWS();
    // const database = await ssm.getEnvValueFromSSM(process.env.postgres_conn_database!);
    // const username = await ssm.getEnvValueFromSSM(process.env.postgres_conn_username!);
    // const password = await ssm.getEnvValueFromSSM(process.env.postgres_conn_password!);
    // const host = await ssm.getEnvValueFromSSM(process.env.postgres_conn_host!);
    console.log('entrou');
    const database = process.env.postgres_conn_database!;
    const username = process.env.postgres_conn_username!;
    const password = process.env.postgres_conn_password!;
    const host = process.env.postgres_conn_host!;
    const options_config_list: Record<string, ConnectionOptions> = {
        ['SCHEDULE']: {
            name: `CONNSCHEDULE_${(new Date()).getTime()}`,
            database,
            username,
            password,
            host,
            type: 'postgres',
            logging: true,
            entities: models,
            synchronize: false,
            port: 5432
        }
    };

    const conn = options_config_list[name];
    console.log('saiu ',conn);
    return conn;
}
