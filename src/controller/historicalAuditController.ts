import {HistoricalAuditService} from '../services/historicalAuditService';
import { LogDecorator } from '../utils/log.decorator';
import {Service} from 'typedi';

@Service()
export class HistoricalAuditController {

    constructor(private readonly classService: HistoricalAuditService){
    }

    @LogDecorator.LogAsync(true)
    public async findAll(): Promise<any> {
        let response = {};
        try {
            const result: any[] = await this.classService.findAll();
            let size = 0;
            if (result && result.length) {
                size = result.length;
            }
            const responseBody = {
                result,
                length: size
            };
            response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responseBody),
                isBase64Encoded: false
            };
            console.log('info', '... @HistoricalAuditController/findAll()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @HistoricalAuditController/findAll()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao recuperar historicos'}),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                isBase64Encoded: false
            };
            return response;
        }
    }

    @LogDecorator.LogAsync(true)
    public async createOne(function_name: string, description: string, input_data: string, output_data: string): Promise<any> {
        let response = {};
        try {
            if (!function_name || !description || !input_data || !output_data) {
                throw new Error('Não possui function_name, description, input_data ou output_data');
            }

            const result: boolean = await this.classService.createOne(function_name,description,input_data,output_data);

            const responseBody = {
                result
            };
            response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responseBody),
                isBase64Encoded: false
            };
            console.log('info', '... @HistoricalAuditController/createOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @HistoricalAuditController/createOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao criar hisorical audit'}),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                isBase64Encoded: false
            };
            return response;
        }
    }

    @LogDecorator.LogAsync(true)
    public async deleteOne(id: number): Promise<any> {
        let response = {};
        try {
            if (!id) {
                throw new Error('Não possui id');
            }

            const result: boolean = await this.classService.deleteOne(id);

            const responseBody = {
                result
            };
            response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responseBody),
                isBase64Encoded: false
            };
            console.log('info', '... @HistoricalAuditController/deleteOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @HistoricalAuditController/deleteOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao deletar historical audit'}),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                isBase64Encoded: false
            };
            return response;
        }
    }

    @LogDecorator.LogAsync(true)
    public async updateOne(id: number,function_name: string, description: string, input_data: string, output_data: string): Promise<any> {
        let response = {};
        try {
            if (!id) {
                throw new Error('Não possui id');
            }

            const result: boolean = await this.classService.updateOne(id,function_name,description,input_data,output_data);

            const responseBody = {
                result
            };
            response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responseBody),
                isBase64Encoded: false
            };
            console.log('info', '... @HistoricalAuditController/updateOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @HistoricalAuditController/updateOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao atualizar historical audit'}),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                isBase64Encoded: false
            };
            return response;
        }
    }

}
