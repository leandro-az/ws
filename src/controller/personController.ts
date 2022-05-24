import {PersonService} from '../services/personService';
import { LogDecorator } from '../utils/log.decorator';
import {Service} from 'typedi';

@Service()
export class PersonController {

    constructor(private readonly classService: PersonService){
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
            console.log('info', '... @PersonController/findAll()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PersonController/findAll()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao recuperar pessoas'}),
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
    public async createOne(name: string, last_name: string, under_age: boolean,
                           telfone: string, email: string, email_answerable: string,
                           telfone_answerable: string): Promise<any> {
        let response = {};
        try {
            if (!name || !last_name || !under_age || !telfone || !email || !email_answerable || !telfone_answerable) {
                throw new Error('Não possui name, last_name, under_age,telfone, email, email_answerable ou telfone_answerable');
            }

            const result: boolean = await this.classService.createOne(name, last_name, under_age,
                telfone, email, email_answerable, telfone_answerable);

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
            console.log('info', '... @PersonController/createOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PersonController/createOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao criar person'}),
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
            console.log('info', '... @PersonController/deleteOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PersonController/deleteOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao deletar person'}),
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
    public async updateOne(id: number, name: string, last_name: string, under_age: boolean,
                           telfone: string, email: string, email_answerable: string,
                           telfone_answerable: string): Promise<any> {
        let response = {};
        try {
            if (!id) {
                throw new Error('Não possui id');
            }

            const result: boolean = await this.classService.updateOne(id,name, last_name, under_age,
                telfone, email, email_answerable, telfone_answerable);

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
            console.log('info', '... @PersonController/updateOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PersonController/updateOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao atualizar person'}),
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
