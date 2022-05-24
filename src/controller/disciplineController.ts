import {DisciplineService} from '../services/disciplineService';
import {Service} from 'typedi';

@Service()
export class DisciplineController {

    constructor(private readonly classService: DisciplineService){
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
            console.log('info', '... @DisciplineController/findAll()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @DisciplineController/findAll()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao recuperar disciplinas'}),
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
