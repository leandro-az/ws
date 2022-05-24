import {ClassService} from '../services/classService';
import {Service} from 'typedi';

@Service()
export class ClassController {

    constructor(private readonly classService: ClassService){
    }

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
            console.log('info', '... @ClassController/findAll()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @ClassController/findAll()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao recuperar classe'}),
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
