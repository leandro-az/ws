import {UserService} from '../services/userService';
import { LogDecorator } from '../utils/log.decorator';
import {Service} from 'typedi';

@Service()
export class UserController {

    constructor(private readonly classService: UserService){
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
            console.log('info', '... @UserController/findAll()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @UserController/findAll()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao recuperar usuários'}),
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
    public async createOne(login: string, password: string): Promise<any> {
        let response = {};
        try {
            if (!login || !password) {
                throw new Error('Não possui login ou password');
            }

            const result: boolean = await this.classService.createOne(login,password);

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
            console.log('info', '... @UserController/createOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @UserController/createOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao criar usuario'}),
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
    public async deleteOne(login: string): Promise<any> {
        let response = {};
        try {
            if (!login) {
                throw new Error('Não possui login');
            }

            const result: boolean = await this.classService.deleteOne(login);

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
            console.log('info', '... @UserController/deleteOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @UserController/deleteOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao deletar usuario'}),
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
    public async updateOne(login: string, password: string): Promise<any> {
        let response = {};
        try {
            if (!login) {
                throw new Error('Não possui login e password');
            }

            const result: boolean = await this.classService.updateOne(login,password);

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
            console.log('info', '... @UserController/updateOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @UserController/updateOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao atualizar usuario'}),
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
