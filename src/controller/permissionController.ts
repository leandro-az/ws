import {PermissionService} from '../services/permissionService';
import { LogDecorator } from '../utils/log.decorator';
import {Service} from 'typedi';

@Service()
export class PermissionController {

    constructor(private readonly classService: PermissionService){
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
            console.log('info', '... @PermissionController/findAll()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PermissionController/findAll()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao recuperar permissões'}),
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
    public async createOne(description: string): Promise<any> {
        let response = {};
        try {
            if (!description) {
                throw new Error('Não possui description');
            }

            const result: boolean = await this.classService.createOne(description);

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
            console.log('info', '... @PermissionController/createOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PermissionController/createOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao criar permission'}),
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
            console.log('info', '... @PermissionController/deleteOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PermissionController/deleteOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao deletar permission'}),
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
    public async updateOne(id: number, description: string): Promise<any> {
        let response = {};
        try {
            if (!id) {
                throw new Error('Não possui id');
            }

            const result: boolean = await this.classService.updateOne(id,description);

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
            console.log('info', '... @PermissionController/updateOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PermissionController/updateOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao atualizar permission'}),
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
