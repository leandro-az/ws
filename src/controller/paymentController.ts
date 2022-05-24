import {PaymentService} from '../services/paymentService';
import { LogDecorator } from '../utils/log.decorator';
import {Service} from 'typedi';

@Service()
export class PaymentController {

    constructor(private readonly classService: PaymentService){
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
            console.log('info', '... @PaymentController/findAll()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PaymentController/findAll()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao recuperar pagamentos'}),
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
    public async createOne(value: number, discount: number, due_date: Date, due_payment: Date, paid: boolean): Promise<any> {
        let response = {};
        try {
            if (!value || !discount || !due_date || !due_payment || !paid) {
                throw new Error('Não possui value, discount, due_date, due_payment ou paid');
            }

            const result: boolean = await this.classService.createOne(value,discount,due_date,due_payment,paid);

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
            console.log('info', '... @PaymentServiceController/createOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PaymentServiceController/createOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao criar payment'}),
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
            console.log('info', '... @PaymentServiceController/deleteOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PaymentServiceController/deleteOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao deletar payment'}),
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
    public async updateOne(id: number,value: number, discount: number, due_date: Date, due_payment: Date, paid: boolean): Promise<any> {
        let response = {};
        try {
            if (!id) {
                throw new Error('Não possui id');
            }

            const result: boolean = await this.classService.updateOne(id,value,discount,due_date,due_payment,paid);

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
            console.log('info', '... @PaymentServiceController/updateOne()');
            console.log('info', JSON.stringify(response));
            return response;
        } catch (error) {
            console.log('erro', '... @PaymentServiceController/updateOne()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao atualizar payment'}),
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
